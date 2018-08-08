// 1. Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

function Multiplier() {
    this.currentValue = 1;

    this.multiply = function(number) {
        this.currentValue = number * this.currentValue;
    }

    this.getCurrentValue = function() {
        return this.currentValue;
    }
}

var x = new Multiplier();

x.multiply(2);
x.getCurrentValue();

// 2. Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

function Album() {
    this.photos = [];

    this.addPhoto = function(photo) {
        this.photos.push(photo);
    }

    this.findPhoto = function(photoNumber) {
        return this.photos[photoNumber - 1];
    }

    this.listAllPhotos = function() {
        let photoList = [];
        for(let photo of this.photos) {
            photoList.push(photo.filename)
        } return photoList.join(', ');
    }

    this.infoOfPhotoNumber = function() {
        return this.photos[photoNumber - 1].info();
    }
}

function Photo(filename, location) {
    this.filename = filename;
    this.location = location;

    this.info = function() {
        return 'Filename: ' + this.filename + ' Location: ' + this.location;
    }
}

var august = new Album();

august.addPhoto(new Photo('family_dinner.jpg', 'Philadelphia'));
august.addPhoto(new Photo('parents.jpg', 'Philadelphia'));
august.addPhoto(new Photo('children.jpg', 'Philadelphia'));
august.addPhoto(new Photo('newcar.jpg', 'driveway'));
august.addPhoto(new Photo('bbq.jpg', 'backyard'));
august.addPhoto(new Photo('frisee.jpg', 'backyard'));

august.findPhoto(1);
august.findPhoto(3);
august.findPhoto(5);

august.infoOfPhotoNumber(2);

august.listAllPhotos();

// 3. Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Teacher(name, age, subject) {
    this.subject = subject;

    this.teacherInfo = function() {
        return name + ', Age: ' + age + ', is a ' + subject + ' Teacher';
    }

    Person.call(this, name, age);
}

function Student(name, age, classYear, credits) {
    this.classYear = classYear;
    this.credits = credits;
    
    this.studentInfo = function() {
        return this.classYear + ' ' + this.name + ', Age: ' + this.age + ', is taking ' + this.credits + ' credits.';
    }

    Person.call(this, name, age);
}

function School() {
    this.studentList = [];
    this.teacherList = [];
    
    this.addStudent = function(student) {
        this.studentList.push(student);
    }
    
    this.addTeacher = function(teacher) {
        this.teacherList.push(teacher);
    }
    
    this.studentRollCall = function() {
        let rollCall = [];
        for(let student of this.studentList) {
            rollCall.push(student.studentInfo());
        } return rollCall.join('; ');
    }
    
    this.teacherRollCall = function() {
        let rollCall = [];
        for(let teacher of this.teacherList) {
            rollCall.push(teacher.teacherInfo());
        } return rollCall.join('; ');
    }
    
    this.findStudentByName = function(studentName) {
        for(let student of this.studentList) {
            if (student.name == studentName) {
                student.studentInfo();
            }
        }
    }
    
    this.findTeacherByName = function(teacherName) {
        for(let teacher of this.teacherList) {
            if (teacher.name == teacherName) {
                teacher.teacherInfo();
            }
        }
    }
    
    this.seniorList = function() {
        let seniorList = [];
        for(let student of this.studentList) {
            if (student.classYear == 'Senior') {
                seniorList.push(student.name);
            } 
        } return 'Senior List: ' + seniorList.join(', ');
    }
    
    this.juniorList = function() {
        let juniorList = [];
        for(let student of this.studentList) {
            if (student.classYear == 'Junior') {
                juniorList.push(student.name);
            } 
        } return 'Junior List: ' + juniorList.join(', ');
    }
    
    this.sophmoreList = function() {
        let sophmoreList = [];
        for(let student of this.studentList) {
            if (student.classYear == 'Sophmore') {
                sophmoreList.push(student.name);
            }
        } return 'Sophmore List: ' + sophmoreList.join(', ');
    }
    
    this.freshmanList = function() {
        let freshmanList = [];
        for(let student of this.studentList) {
            if (student.classYear == 'Freshman') {
                freshmanList.push(student.name);
            } 
        } return 'Freshman List: ' + freshmanList.join(', ');
    }
}

Teacher.prototype = Object.create(Person.prototype);
Student.prototype = Object.create(Person.prototype);

var mySchool = new School();

mySchool.addStudent(new Student('Mike', 29, 'Senior', 15));
mySchool.addStudent(new Student('Jana', 22, 'Freshman', 16));
mySchool.addStudent(new Student('Barry', 30, 'Senior', 12));
mySchool.addStudent(new Student('Ethan', 29, 'Junior', 13));
mySchool.addStudent(new Student('Amie', 23, 'Sophmore', 12));
mySchool.addStudent(new Student('Floyd', 18, 'Freshman', 14));
mySchool.addStudent(new Student('Charlie', 19, 'Sophmore', 15));
mySchool.addStudent(new Student('Nick', 21, 'Junior', 17));

mySchool.addTeacher(new Teacher('Dr. Sloat', 100, 'Chemistry'));
mySchool.addTeacher(new Teacher('Mr. Clark', 40, 'Physics'));
mySchool.addTeacher(new Teacher('Mr. Mister', 52, 'History'));
mySchool.addTeacher(new Teacher('Mrs. Misses', 52, 'English'));

mySchool.teacherRollCall();
mySchool.studentRollCall();

mySchool.freshmanList();
mySchool.sophmoreList();
mySchool.juniorList();
mySchool.seniorList();

mySchool.findStudentByName('Mike');
mySchool.findTeacherByName('Dr. Sloat');