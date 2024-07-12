import { useWriter } from "../contexts/WriterProvider";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoContainer from "../components/InfoContainer";

function StaffOfPersonelle() {
  const { writers } = useWriter();

  return (
    <>
      <Header />
      <InfoContainer>
        <div>
          <h3>Chief of Technical Operations</h3>
          <div>Cem Demir</div>
        </div>
        <div>
          <h3>Authors</h3>
          {writers?.map((author) => (
            <div key={author.id}>{author.name} </div>
          ))}
        </div>
      </InfoContainer>
      <Footer />
    </>
  );
}

export default StaffOfPersonelle;
