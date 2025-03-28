import TypeAhead from ".";

interface Data {
  name: string;
  height: string;
  mass: string;
}

function AutoSuggestion() {
  const dataPromise = async (query: string) => {
    return await fetch(`https://swapi.dev/api/people/?search=${query}`);
  };

  const dataTransformer = (response: any) => {
    return response.results;
  };

  return (
    <>
      <TypeAhead<Data>
        promise={dataPromise}
        debounceTime={400}
        label="Search"
        dataTransformer={dataTransformer}
        placeholder="search for products"
      />
    </>
  );
}

export default AutoSuggestion;
