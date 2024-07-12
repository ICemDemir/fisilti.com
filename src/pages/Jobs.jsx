import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useJobs } from "../contexts/JobProvider";

import Logo from "../components/Logo";
import Job from "../components/Job";
import JobDetail from "../components/JobDetail";
import Footer from "../components/Footer";

const StyledHeader = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;
  background-color: var(--color-grey-100);
  box-shadow: 1px 1px 1px var(--color-grey-300);
  color: var(--color-brand-900);
  text-transform: uppercase;

  @media (max-width: 500px) {
    & h3 {
      font-size: 1.2rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5rem;

  @media (max-width: 600px) {
    padding: 2.5rem;
  }
`;

const JobsList = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px var(--color-grey-200);
  padding: 5rem 5rem;
  height: auto;

  .jobsFound {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--color-grey-500);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @media (max-width: 900px) {
    padding: 2.5rem;
    margin-right: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const AboutUs = styled.div`
  background-color: #fff;
  padding: 5rem;
  width: 40%;
  height: max-content;
  box-shadow: 1px 1px 1px 1px var(--color-grey-200);

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    padding: 4rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    padding: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
    padding: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

function Jobs() {
  const { jobsSorted } = useJobs();
  // Set state whether to show job detail on the right side of the page
  const [openJobDetail, setOpenJobDetail] = useState(false);

  // Select the id of the job that is clicked
  const navigate = useNavigate();

  // Get the id from the url
  const { id } = useParams();

  function handleOpen(id) {
    setOpenJobDetail(true);
    navigate(`../jobOpportunities/${id}`);
  }

  function handleClose() {
    setOpenJobDetail(false);
  }

  return (
    <div style={{ backgroundColor: "var(--color-grey-100)" }}>
      <StyledHeader>
        <Logo />
        <h3>Job Opportunities</h3>
      </StyledHeader>
      <Container>
        <JobsList>
          <p className="jobsFound">{jobsSorted.length} jobs found </p>
          {jobsSorted.map((job) => (
            <Job key={job.id} job={job} onClick={() => handleOpen(job.id)} />
          ))}
        </JobsList>

        {openJobDetail === false ? (
          <AboutUs>
            <h3>About Us</h3>
            <div>
              We are a pioneering web affiliate marketing company dedicated to
              enhancing online shopping experiences through curated
              recommendations and engaging content. Our innovative approach
              seamlessly connects consumers with products they love, driving
              growth and sales for our partner brands. Our team, composed of
              experts in technology, marketing, and content creation, is
              committed to staying ahead of industry trends to provide
              exceptional value to our users and partners. At the heart of our
              mission is a passion for delivering top-notch content and
              cutting-edge solutions that make a direct impact on the online
              marketplace. Join us and become part of a dynamic, creative, and
              supportive environment where every contribution drives success and
              innovation.
            </div>
          </AboutUs>
        ) : (
          <JobDetail job={jobsSorted} id={id} onClick={() => handleClose()} />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Jobs;
