import axiosInstance from "../configure/apiConfig";

const endPoint = {
  getAllSongs: "/api/songs",
  searchedSongs: "/api/songs/search",
};

class SongApi {
  static async getSongs() {
    try {
      const response = await axiosInstance.get(`${endPoint.getAllSongs}`);
      return response;
    
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async allSearchedSongs(data) {
    try {
      const response = await axiosInstance.post(`${endPoint.searchedSongs}`, {
        query: data
    });
      return response;
    
    } catch (error) {
      console.log(error);
      return error;
    }
  }


}

export default SongApi;
