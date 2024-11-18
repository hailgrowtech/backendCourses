const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');


router.post('/', courseController.createCourse);
router.post('/:courseId/addUser', courseController.addUserToCourse);

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.get('/byexpert/:expertId', courseController.getCoursesByExpertId)

router.patch('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);



module.exports = router;