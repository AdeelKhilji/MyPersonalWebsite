import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Home = () =>{
  return(
    <div className="text-center p-10">
      <h2 className=" text-5xl py-2 text-teal-600">Adeel Khilji</h2>
      <h2 className=" text-2xl py-2 text-gray-800">Developer, Designer and Artist</h2>
      
      <p className="text-md py-5 leading-8 text-gray-800">
        A Fullstack web developer who is currently looking <br/>
        to join a company to gain hands on experience <br/>
        while working with scalable projects
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillGithub/>
        <AiFillLinkedin/>
      </div>
    </div>
  );
}
export default Home;