const Course = require('../models/Course');




exports.createCourse = async (req,res) => {
    try {
        const{
            imagePath,
            courseName,
            amount,
            duration,
            level,
            numberOfSessions,
            channelLink,
            videos,
            courseDescription,
            expertId,
            active,
        } = req.body;

      

        const course = new Course({
            imagePath,
            courseName,
            amount,
            duration,
            level,
            numberOfSessions,
            channelLink,
            videos,
            courseDescription,
            expertId,
            active,
        });



        const savedCourse = await course.save();
        res.status(200).json(savedCourse);
    }
    catch (error){
        res.status(400).json({message : error.message});
    }
};



// get courses

exports.getAllCourses = async (req,res) =>{
    try{
        const courses = await Course.find();
        res.json(courses);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};



// get single Course

exports.getCourseById = async (req,res) =>{
    try{ 
        const course = await Course.findById(req.params.id);
        if(!course)
            return res.status(404).json({message: 'Course does not Exist'});
        res.json(course);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.getCoursesByExpertId = async(req,res) =>{
    try{
        const {expertId} = req.params;
        console.log(expertId);
        const courses = await Course.find({expertId:expertId});
        console.log('courses Found' , courses);

        res.status(200).json(courses);
    } catch (error){[
        res.status(500).json({message:error.message}),
    ]}
}

// get a single course byId

exports.updateCourse = async(req,res) =>{
    try{
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({message:'No Fields provided to Update'});
        }

        const updateCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true, runValidators:true
            }
        );

        if(!updatedCourse){
            return res.status(404).json({message:'Course Does not Exist'})
        }

        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};


// delete course

exports.deleteCourse = async (req,res) =>{
    try{
        const course = await Course.findByIdAndDelete(req.params.id);
        if(!course)
            return res.status(404).json({message: 'course Does not exist'})
        res.json({message:'course Deleted Successfully'});
    } catch (error){
        res.status(500).json({message:error.message});
    }
};


// adding user to course

exports.addUserToCourse = async (req,res) =>{
    try{
        const {courseId} = req.params;
        const{userId,userName} = req.body;
        const course = await Course.findById(courseId);

        if(!course) return res.status(404).json({message:'Course Not Found'});

        const userExists = course.users.some(
            (user) => user.userId === userId
        );

        if(userExists){
            return res.status(400).json({message:'User already enrolled in this course'});
        }

        course.users.push({userId, userName});
        await course.save();

        res.status(200).json({message:'User added to the course successfully'});
    } catch (error){
        res.status(500).json({message: error.message});
    }
};