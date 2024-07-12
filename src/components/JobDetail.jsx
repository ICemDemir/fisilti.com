import moment from "moment";
import styled from "styled-components";

import { CiClock2, CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline, IoCloseCircleOutline } from "react-icons/io5";

import ApplyButton from "./Button";

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #fff;
  padding: 5rem;
  box-shadow: 1px 1px 1px 1px var(--color-grey-200);
  height: 100vh;

  @media (max-width: 900px) {
    width: 50%;
  }

  .heading {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--color-grey-200);

    &--first-line {
      display: flex;
      justify-content: space-between;

      @media (max-width: 1200px) {
        font-size: 1.2rem;
      }

      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 3rem;
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const DetailText = styled.div`
  overflow: scroll;
  scrollbar-width: none;

  & h3 {
    padding: 2rem 0;
  }
`;

const InfoIcons = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem 1rem 0 0;
  color: var(--color-grey-400);

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    gap: 1.6rem;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    font-size: 1.2rem;
    gap: 1rem;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

function JobDetail({ job, id, onClick }) {
  // Select the job with the id
  const the_job = job.find((j) => j.id === parseInt(id));

  const dateTimeAgo = moment(new Date(the_job.created_at)).fromNow();

  return (
    <JobContainer>
      <div className="heading">
        <div className="heading--first-line">
          <h2>{the_job.title} </h2>
          <IoCloseCircleOutline
            style={{ cursor: "pointer" }}
            onClick={onClick}
          />
        </div>
        <ApplyButton>Apply Now</ApplyButton>
      </div>
      <DetailText>
        <InfoIcons>
          <div>
            <span>
              <CiLocationOn />{" "}
            </span>
            <span>{the_job.location}</span>
          </div>
          <div>
            <span>
              <IoBriefcaseOutline />{" "}
            </span>
            <span>{the_job.employment_type}</span>
          </div>
          <div>
            <span>
              <CiClock2 />{" "}
            </span>
            <span>{dateTimeAgo}</span>
          </div>
          <span> Open Positions: {the_job.open_positions} </span>
        </InfoIcons>
        <div>
          <h3>About us</h3>
          <div>{the_job.entry}</div>
        </div>
        <div>
          <h3>Job Description</h3>
          <div>{the_job.job_description}</div>
        </div>
        <div>
          <h3>Requirements</h3>
          <div>{the_job.requirements}</div>
        </div>
        <div>
          <h3>Qualifications</h3>
          <div>{the_job.qualifications}</div>
        </div>
      </DetailText>
    </JobContainer>
  );
}

export default JobDetail;
