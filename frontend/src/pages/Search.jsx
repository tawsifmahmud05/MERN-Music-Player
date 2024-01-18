import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongApi from "../api/SongApi";

import { SongCard } from "../components";

const Search = () => {
  const [data, setdata] = useState();
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  // const songs = data?.tracks?.hits.map((song) => song.track);

  // if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  // if (error) return <Error />;

  const searchedSongList = async () => {
    const response = await SongApi.allSearchedSongs(searchTerm);
    if (response) {
      console.log(response.data);
      return response.data;
    }
  };
  const setValues = async () => {
    const dat = await searchedSongList();
    setdata(dat);
  };

  useEffect(() => {
    setValues();
  }, [searchTerm]);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
