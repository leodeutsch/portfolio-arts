export const getSerieDescription = (
  serieId: string,
  t: (key: string) => string
): string => {
  switch (serieId) {
    case "1":
      return t("seriesDetails.formRelief");
    case "2":
      return t("seriesDetails.sloops");
    case "3":
      return t("seriesDetails.abstracts");
    case "4":
      return t("seriesDetails.blackWomen");
    default:
      return "";
  }
};
