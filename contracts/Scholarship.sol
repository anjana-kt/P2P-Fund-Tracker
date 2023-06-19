// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Scholarship {

    uint256 public registerCount=0;

    struct Student{
        uint256 id;
        address donor;
        string name;
        string cgpa;
        uint256 received;
        uint256 totalAmount;
    }

    struct Sponsor{
        uint256 id;
        address[] students;
    }

    mapping (address => Student) public registeredStudents;
    mapping (address => Sponsor) public sponsors;
    mapping (uint256 => address) public studentList;

    address public owner;

    mapping(address => bool) public isStudent;
    mapping(address => bool) public isSponsor;
    mapping(address => bool) public isVendor;
    mapping(address => uint256) public scholarships;

    event ScholarshipAwarded(address indexed student, address indexed sponsor, uint256 amount);

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    modifier onlyStudent() {
        require(isStudent[msg.sender], "Only students can perform this action");
        _;
    }

    modifier onlySponsor() {
        require(isSponsor[msg.sender], "Only sponsors can perform this action");
        _;
    }

    function addStudent(address _student,string memory name, string memory cgpa, uint256 totalAmount) public onlyOwner returns(uint256) {
        isStudent[_student] = true;
        registerCount+=1;
        Student memory reg = Student(registerCount, address(0), name, cgpa, 0, totalAmount);
        registeredStudents[_student]=reg;
        studentList[registerCount]=_student;
        return 0;
    }

    function getRegisteredCount() public view returns (uint256) {
        return registerCount;
    }

    function addSponsor(address _sponsor) public onlyOwner {
        isSponsor[_sponsor] = true;
    }

    function awardScholarship(address _student, uint256 _amount) public onlySponsor {
        require(isStudent[_student], "Recipient must be a registered student");
        scholarships[_student] += _amount;
        emit ScholarshipAwarded(_student, msg.sender, _amount);
    }

    function withdraw() public onlyStudent {
        uint256 amount = scholarships[msg.sender];
        scholarships[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}

function getStudentDetails(uint256 _id) public view returns (uint256, address, string memory, string memory, uint256, uint256) {
    address studentAddress = studentList[_id];
    require(studentAddress != address(0), "Invalid student ID");

    Student memory student = registeredStudents[studentAddress];
    return (
        student.id,
        student.donor,
        student.name,
        student.cgpa,
        student.received,
        student.totalAmount
    );
}







