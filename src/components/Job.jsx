import moment from "moment";
import styled from "styled-components";

import { CiClock2, CiLocationOn } from "react-icons/ci";

const StyledJob = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-grey-300);

  .title {
    display: flex;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
  .location {
    padding: 1rem 0;
  }

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

function Job({ job, onClick }) {
  const dateTimeAgo = moment(new Date(job.created_at)).fromNow();

  return (
    <StyledJob>
      <div className="title" onClick={onClick}>
        {job.title}
      </div>
      <div className="location">
        <span>
          <CiLocationOn />
        </span>
        <span> {job.location}</span>
      </div>
      <div>
        <span>
          <CiClock2 />
        </span>
        <span> {dateTimeAgo}</span>
      </div>
    </StyledJob>
  );
}

export default Job;
