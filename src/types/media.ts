export interface Episode {
    seriesId: number;
    tvdbId: number;
    episodeFileId: number;
    seasonNumber: number;
    episodeNumber: number;
    title: string;
    airDate: string;
    airDateUtc: string;
    overview: string;
    episodeFile: {
      seriesId: number;
      seasonNumber: number;
      relativePath: string;
      path: string;
      size: number;
      dateAdded: string;
      sceneName: string;
      releaseGroup: string;
      language: {
        id: number;
        name: string;
      };
      quality: {
        quality: {
          id: number;
          name: string;
          source: string;
          resolution: number;
        };
        revision: {
          version: number;
          real: number;
          isRepack: boolean;
        };
      };
      mediaInfo: {
        audioBitrate: number;
        audioChannels: number;
        audioCodec: string;
        audioLanguages: string;
        audioStreamCount: number;
        videoBitDepth: number;
        videoBitrate: number;
        videoCodec: string;
        videoFps: number;
        videoDynamicRange: string;
        videoDynamicRangeType: string;
        resolution: string;
        runTime: string;
        scanType: string;
        subtitles: string;
      };
      qualityCutoffNotMet: boolean;
      languageCutoffNotMet: boolean;
      id: number;
    };
    hasFile: boolean;
    monitored: boolean;
    absoluteEpisodeNumber: number;
    unverifiedSceneNumbering: boolean;
    id: number;
  }


  export interface mediaResult {
    id: number;
    path: string;
    filesize: number;
    date: string;
  }