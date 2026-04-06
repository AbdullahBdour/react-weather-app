/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloudIcon from "@mui/icons-material/Cloud";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import moment from "moment/min/moment-with-locales";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeResult, fetchWeather } from "../weatherApiSlice";
import CircularProgress from "@mui/material/CircularProgress";

moment.locale("ar-sa");

export default function WeatherContainer() {
  const { temperature, icon, min, max, description } = useSelector(
    (state) => state.weather.weather,
  );
  const isLoading = useSelector((state) => state.weather.isLoading);
  const dispatch = useDispatch();

  const [lang, setLang] = useState({ language: "ar", direction: "rtl" });
  const { t, i18n } = useTranslation();
  const [date, setDate] = useState(null);
  // const [temp, setTemp] = useState({
  //   temperature: null,
  //   min: null,
  //   max: null,
  //   description: null,
  // });

  function handleLang() {
    if (lang.language === "ar") {
      setLang({ language: "en", direction: "ltr" });
      i18n.changeLanguage("en");
      moment.locale("en");
    } else {
      setLang({ language: "ar", direction: "rtl" });
      moment.locale("ar-sa");
      i18n.changeLanguage("ar");
    }
  }

  useEffect(() => {
    dispatch(fetchWeather());
    i18n.changeLanguage(lang.language);
  }, []);

  useEffect(() => {
    setDate(moment().format("ll"));
  }, [t]);

  return (
    <div style={{ direction: lang.direction == "rtl" ? "ltr" : "rtl" }}>
      <Card
        sx={{
          borderRadius: "12px",
          minWidth: 600,
          minHeight: 300,
          bgcolor: "#0a3f9d",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
          flexDirection: "column",
          direction: lang.direction,
          boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.1)",
          paddingInline: "2.5px",
        }}
      >
        <CardContent>
          {/* ================ Header ================ */}
          <Typography
            sx={{ fontSize: 52, display: "inline-block", marginLeft: 2 }}
          >
            {t("Riyadh")}
          </Typography>
          <Typography
            sx={{ fontSize: 18, display: "inline-block", fontWeight: 400 }}
          >
            {date}
          </Typography>
          <Divider sx={{ background: "#fff" }} />
          {/* ================ Header ================ */}

          {/* ================ Body ================ */}

          <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid container size={7} sx={{ marginTop: 3 }}>
              <Box
                size={8}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid size={8}>
                    <Typography
                      sx={{
                        fontSize: 96,
                        display: "inline-block",
                        fontWeight: 400,
                        marginLeft: 2,
                      }}
                    >
                      {isLoading ? <CircularProgress /> : t(temperature)}
                    </Typography>
                  </Grid>
                  <Grid size={4}>
                    <img src={icon} alt={`${description} Icon`} />
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    fontSize: 32,
                    display: "inline-block",
                    fontWeight: 500,
                  }}
                >
                  {t(description)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    display: "inline-block",
                    fontWeight: 400,
                    marginTop: 2,
                  }}
                >
                  <span>
                    {" "}
                    {t("min")}: {min}{" "}
                  </span>
                  -
                  <span>
                    {" "}
                    {t("max")}: {max}
                  </span>
                </Typography>
              </Box>
            </Grid>

            <Grid size={5}>
              <CloudIcon sx={{ fontSize: 182 }} />
            </Grid>
          </Grid>

          {/* ================ Body ================ */}
        </CardContent>
      </Card>
      <Button sx={{ color: "#ddd", margin: 1 }} onClick={handleLang}>
        {lang.language === "ar" ? "إنجليزي" : "Arabic"}
      </Button>
    </div>
  );
}
