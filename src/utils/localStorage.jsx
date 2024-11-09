import { useEffect } from "react";

const student = [
    {
        "id": "S001",
        "firstName": "Aarav",
        "email": "student1@example.com",
        "password": "123",
        "taskCount": {
            "active": 3,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Math Assignment",
                "taskDescription": "Complete the calculus assignment covering integration and differentiation.",
                "taskDate": "2024-11-15",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Physics Quiz Preparation",
                "taskDescription": "Review chapters 4-6 in preparation for the upcoming physics quiz.",
                "taskDate": "2024-11-13",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "History Project",
                "taskDescription": "Research and draft the initial section of the history project on ancient civilizations.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Chemistry Exam Study",
                "taskDescription": "Study the periodic table and chemical reactions for the chemistry exam.",
                "taskDate": "2024-11-18",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "English Literature Essay",
                "taskDescription": "Complete and submit the essay on Shakespearean tragedies.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "id": "S002",
        "firstName": "Ishaan",
        "email": "student2@example.com",
        "password": "123",
        "taskCount": {
            "active": 3,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Biology Lab Report",
                "taskDescription": "Write and submit the lab report on cellular respiration.",
                "taskDate": "2024-11-15",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Math Exam Review",
                "taskDescription": "Review algebra and geometry topics for the upcoming math exam.",
                "taskDate": "2024-11-13",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "History Essay",
                "taskDescription": "Research and begin writing the essay on World War II.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Physics Lab Preparation",
                "taskDescription": "Prepare for the physics lab on momentum and energy.",
                "taskDate": "2024-11-18",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Literature Analysis",
                "taskDescription": "Complete the analysis of a short story for literature class.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "id": "S003",
        "firstName": "Rhea",
        "email": "student3@example.com",
        "password": "123",
        "taskCount": {
            "active": 3,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Chemistry Assignment",
                "taskDescription": "Complete the assignment on acids, bases, and pH levels.",
                "taskDate": "2024-11-16",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Math Study Session",
                "taskDescription": "Attend the study session on advanced calculus.",
                "taskDate": "2024-11-13",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "English Literature Reading",
                "taskDescription": "Read and summarize Act III of 'Macbeth' for class discussion.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Biology Exam Preparation",
                "taskDescription": "Study cell structures and their functions for the biology exam.",
                "taskDate": "2024-11-19",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "World History Research",
                "taskDescription": "Complete research for the paper on ancient Egypt.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "id": "S004",
        "firstName": "Priya",
        "email": "student4@example.com",
        "password": "123",
        "taskCount": {
            "active": 3,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Physics Assignment",
                "taskDescription": "Complete problems on Newton's laws of motion.",
                "taskDate": "2024-11-16",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Chemistry Study Group",
                "taskDescription": "Participate in the study group on organic chemistry.",
                "taskDate": "2024-11-14",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Philosophy Essay",
                "taskDescription": "Start drafting the essay on existentialism.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Math Test Preparation",
                "taskDescription": "Prepare for the trigonometry test.",
                "taskDate": "2024-11-18",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "History Assignment",
                "taskDescription": "Write an outline for the project on the Roman Empire.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "id": "S005",
        "firstName": "Saanvi",
        "email": "student5@example.com",
        "password": "123",
        "taskCount": {
            "active": 3,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Biology Assignment",
                "taskDescription": "Write up the findings from the plant growth experiment.",
                "taskDate": "2024-11-17",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Physics Study Guide",
                "taskDescription": "Review notes on thermodynamics for the upcoming quiz.",
                "taskDate": "2024-11-14",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Art Project",
                "taskDescription": "Start the sketch for the final art project.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "English Exam Review",
                "taskDescription": "Study character analysis for the English literature exam.",
                "taskDate": "2024-11-19",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Math Homework",
                "taskDescription": "Complete the assigned problems on quadratic equations.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    }
];




const admin = [
    {
        "id":1,
        "email":"admin@123",
        "password":"123",
    }
];


export const setLocalStorage=()=>{
    localStorage.setItem('student',JSON.stringify(student))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage=()=>{
    
    const studentdata = JSON.parse(localStorage.getItem('student'))
    const admindata = JSON.parse(localStorage.getItem('admin'))
    
    // console.log(studentdata,admindata)
    return {studentdata,admindata}
    
}