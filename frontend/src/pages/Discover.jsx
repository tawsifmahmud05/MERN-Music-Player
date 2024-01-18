import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongApi from "../api/SongApi";
import { SongCard } from "../components";
const Discover = () => {
  const [data, setdata] = useState();

  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const setUpSongList = async () => {
    const response = await SongApi.getSongs();
    if (response) {
      //   console.log(response.data.data);
      return response.data.data;
    }
  };
  const setValues = async () => {
    const dat = await setUpSongList();
    setdata(dat);
  };

  useEffect(() => {
    setValues();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-1 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start items-center justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song._id}
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

export default Discover;
