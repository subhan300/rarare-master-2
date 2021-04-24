import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../Pages/Forms/Signup";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Login from "../Pages/Forms/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/Pricing";
// import Home from "../Pages/home/home";
// import BusinessUploadImg from "../Pages/Bussinus/upload_img";
// import Forget from "../Pages/Forms/forget";
// import TermAndCond from "../Pages/termAndCond/termAndCond";
// import Blog from "../Pages/blogs/blog";
// import SelectBlog from "../Pages/blogs/oneBlogPage";
import PostHome from "../Pages/Post/PostHome";
import PostReport from "../Pages/Post/PostReport";
import PostReceive from "../Pages/Post/PostReceive";
import PostProposal from "../Pages/PostConsensus/PostProposal";
import PostConLoc from "../Pages/PostConsensus/PostConLoc";
import PostConOpt from "../Pages/PostConsensus/PostConOpt";
import Extra from "../Extra";
import PostConsensusTime from "../Pages/PostConsensus/PostConsensusTime";
import PostConsensusReceive from "../Pages/PostConsensus/PostConsensusReceive";
import Rant from "../Pages/Rant/Rant"
import Proposal from "../Pages/Proposal/Proposal"
import ParticipatoryBudget from "../Pages/ParticipatoryBudget/ParticipatoryBudget";
import PartBudgetDetails from "../Pages/ParticipatoryBudget/PartBudgetDetails";
const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/extra">
            <Extra />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/_pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/post">
            <PostHome />
          </Route>
          <Route exact path="/post-report">
            <PostReport />
          </Route>
          <Route exact path="/post-receive">
            <PostReceive />
          </Route>
          <Route exact path="/consensus">
            <PostProposal />
          </Route>
          <Route exact path="/consensus-report">
            <PostConLoc />
          </Route>
          <Route exact path="/consensus-options">
            <PostConOpt />
          </Route>
          <Route exact path="/consensus-time">
            <PostConsensusTime />
          </Route>
          <Route exact path="/consensus-receive">
            <PostConsensusReceive />
          </Route>

          <Route exact path="/proposal">
            <Proposal />
          </Route>
          <Route exact path="/rant">
            <Rant />
          </Route>
          <Route exact path="/participatory">
            <ParticipatoryBudget />
          </Route>
          <Route exact path="/part-budget-details">
            <PartBudgetDetails />
          </Route>
          {/* <Route exact path="/forget" component={Forget} />
          <Route exact path="/terms" component={TermAndCond} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={SelectBlog} />
          <Route path="/business-logo" component={BusinessUploadImg} /> */}
          
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default Routes;
