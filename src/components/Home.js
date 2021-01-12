import React from 'react';
import Login from '../GUCStaffMemberPages/Login';
import Profile from '../GUCStaffMemberPages/Profile';
import Requests from "../HODPages/Requests";
import AllCourses from '../CommonCourses/Courses';
import InstructorCourseInfo from '../InstructorPages/CourseInfoPage'
import Course from "../HODPages/Course";
import ChangePassword from '../GUCStaffMemberPages/ChangePassword';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import ViewProfile from '../InstructorPages/ViewProfilePage';
import AssignCoordinator from '../InstructorPages/CoordinatorAssigningPage';
import InstructorSlots from '../InstructorPages/SlotsPage';

function Home() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/login" component={Login} exact/>
        <Route path="/courses" component={AllCourses} exact/>
        <Route path="/courses/:id?" render={props => <Course {...props}/>} exact/>
        <Route path="/requests" component={Requests} exact/>
        <Route path="/changePassword" component={ChangePassword} exact/>
        <Route path="/courses/:id/instructor" component={InstructorCourseInfo} exact/>;
        <Route path="/profile/:id" component={ViewProfile} exact/>
        <Route path="/course/:courseId/CoordinatorAssigning" component={AssignCoordinator} exact />
        <Route path="/course/:courseId/slots" component={InstructorSlots} exact />
        <Route path="" render={props => <Profile {...props}/>} exact/>

      </Switch>
    </>
  );
}

export default Home;
