export type optionType = {
    name: string
    country: string

    lat: number
    lon: number
}

export type forecastType = {
    name: string;
    sys: {
        country: string;
    }
    main: {
      temp: string;
    };
    weather: [
      {
        main: string;
        icon: string;
        description: string;
      }
    ];
  };