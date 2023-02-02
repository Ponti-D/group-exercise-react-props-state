// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>

const ChuckJoke: React.FC<{ id: number; joke: string }> = ({ id, joke }) => {
  return (
    <>
      <p>
        {id} {joke}
      </p>
    </>
  );
};

export default ChuckJoke;
