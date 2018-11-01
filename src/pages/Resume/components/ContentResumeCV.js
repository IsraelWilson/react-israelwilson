import React from 'react';
import {PositionCV} from "./PositionCV";

export class ContentResumeCV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        {/* Cotnact row */}
        <div>
          <div>
            <h1>Israel Stephan John Wilson</h1>
            <p>
              Cell: 312.478.5154
              Email: israelsjwilson@gmail.com
            </p>
          </div>

          <div>
            3515 Coker Street
            Irving, Texas 75062
          </div>
        </div>

        {/* Positions row */}
        <div>
          <div>
            <PositionCV company="Urban Prep Academy"
                        date="08/2015 - 05/2016"
                        description="Urban Prep Academy is a non-profit organization in Chicago that focuses on getting African American males to graduate high school and college.
                        They have graduated 100% of their students and currently have 3 campuses."
                        title="Urban Prep Fellow"
                        responsibilities={"Strengthened support systems for Urban Prep graduates enrolled in college",
                                          "Monitored and updated Urban Prep website",
                                          "Maintained monthly newsletter and email communications",
                                          "College campus chaperone"}/>

            <PositionCV company="Blue 1647"
                        date="06/2015 - 07/2015"
                        description="Blue 1647 is an entrepreneurship and technology innovation center that has a focus to teach and expose minority groups to the latest forms of technology.
                                     Their summer tech programs include web design and programming lessons for all ages."
                        title="Programmnig Teacher"
                        responsibilities={"Created 6 Week lesson plan for students",
                                          "Taught CSS, HTML, and PHP",
                                          "Planned a student led, college career fair",
                                          "Hosted a website launch party where students demod their projects for family and friends",
                                          "Worked with Microsoft employee and held a video game development class"}/>

            <PositionCV company="HBCU ICE Hackathon"
                        date="04/2015"
                        description="The HBCU ICE Hackathon was a programming event held in the Atlanta Student Center to encourage African American students in STEM fields and cultivate new ideas."
                        title="Student Trailblazer"
                        responsibilities={"Led a group brainstorming activity for application development",
                                          "Created CommonTouch android application prototype as lead programmer",
                                          "Created presentation and presented group project to selected judges"}/>

            <PositionCV company="Club Scientific"
                        date="07/2014"
                        description="Club Scientific is an organization led by multiple people across the US to get younger children interested in the maths and sciences."
                        title="Science Teacher"
                        responsibilities={"Taught computer programming and space engineering concepts to students",
                                          "Implemented interactive programs, built functional robot arms, and launched rockets with students",
                                          "Introdced the concept of polymers and how certain chemicals react with each other",
                                          "Introduced circuits and the concept of conductors and insulators to students"}/>

            <PositionCV company="Fulton County Information Technology"
                        date="05/2012 - 05/2013"
                        description="Starting off as an intern with the Fulton County IT Dept.
                                    Turned into a yearlong job opportunity where I learned how to work in a real work environment
                                    and cultivated the skills I developed in college."
                        title="Technical Support"
                        responsibilities={"Learned county standards for user profiles permissions and technology used by staff",
                                          "Learned basic network operations and how servers operate",
                                          "Created custom user accounts for laptops and desktops to be used across the department",
                                          "Set up workstations at remote government facilities for both full deployments and maintenance",
                                          "Diagnosed and fixed computers with dated hardware and various viruses"}/>

            <PositionCV company="Googe Fuse"
                        date="08/2011"
                        description="FUSE is a program hosted by Google that brought minority students from all around the US together to network with one another
                                     and to continue challenging them to learn new things."
                        title="FUSE student"
                        responsibilities={"Learned the new functionality HTML5 has to offer",
                                          "Worked with team members to design and create a useful web application for college students",
                                          "Leanred what a software engineers workflow is like and what a normal day for one may look like"}/>

            <PositionCV company="Google Computer Science Summer Institute"
                        date="07/2010 - 08/2010"
                        description="A summer program that is hosted by Google for students in college and entering that show an interest in computer science."
                        title="CSSI Intern"
                        responsibilities={"Learning the basics of the Python programming language",
                                          "Completing first group programming project",
                                          "Creating a com[uter sciecne promotion board"}/>

            <PositionCV company="United Stated House of Congress"
                        date="06/2008 - 07/2008"
                        description="An internship for students interested in learning more about politics and showing an interest in them."
                        title="Congressional Page"
                        responsibilities={"Collect votes of congressmen and congresswomen",
                                          "Desk Manager",
                                          "Delievered important messages to and from House of Congress",
                                          "Posting the entrance for Nanci Pelosi",
                                          "Mailing flags to the families of war veterans and soldiers"}/>

            <PositionCV company="Project SOAR"
                        date="06/2006 - 07/2006 and 06/2007 - 07/2007"
                        description="A Mentoring project created by Mayor Daley to create summer jobs for students while enriching children."
                        title="Teen Literacy Coach"
                        responsibilities={"Mentoring children from the ages of 3 - 10",
                                          "Keeping work and play areas sanitized",
                                          "Managed money for worksite",
                                          "Organized activities and recreation"}/>
          </div>
        </div>

        {/* Education row */}
        <div>
          <div>
            <p>
              Urban Prep Charter Academy
              6201 S Stewart Ave.
              Chicago, Illinois 60619
              Tel: 773.535.9724
            </p>
          </div>

          <div>
            <p>
              Morehouse College
              830 Westview Drive S.W.
              Atlanta, Georgia 30314
              Tel: 404.681.2800
            </p>
          </div>
        </div>

        {/* Achievement/Extras row */}
        <div>
          <div>
            <p>
              Suma Cum Lade (Urban Prep)
              15 Time Honorary Gold Tie Recipient – Award weekly to exceptional students (Urban Prep)
              Cerrtificate of Achievement – Excellence in Mathematics (Morehouse)
              Morehouse Academic Scholarship
              Omega Psi Phi – Scholarship Recipient (2010)
              Google Computer Science Scholarship (2010)
              Rainbow Push Scholarship (2010)
              Superintendent Commission for the Study of Demographics and Diversity Scholarship (2010)
            </p>
          </div>
        </div>
    </React.Fragment>
    );
  }
}
