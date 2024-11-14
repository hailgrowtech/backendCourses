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


// get a single course byId

exports.updateCourse = async (req,res) =>{
    try{
        const updateCourse = await course.findByIdAndUpdate(req.params.id , req.body, {new:true, runValidators:true});
        if(!updatedCourse)
            return res.status(404).json({message:'course does not exist'})
        res.json(updateCourse);


    } catch(error){
        res.status(400).json({message: error.message});
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