"use client"

import HeaderTitle from "@/components/atoms/header-title/header-title";
import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckIcon from "@mui/icons-material/Check";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const schema = yup
  .object({
    title: yup.string().min(2).max(20).required(),
    description: yup.string().required(),
    categoriesId: yup.string().required(),
  })
  .required();

interface ContactForm {
  title: string;
  description: string;
  categoriesId: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactForm>({ mode: "onBlur", resolver: yupResolver(schema) });

  function onFormSubmit(data: ContactForm) {
    console.log(data);
  }

  return (
    <Container>
      <Card
        className="Card"
        style={{
          width: "75%",
          maxWidth: "800px",
          backgroundColor: "white",
          border: "1px solid white",
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          alignItems: "center",
          boxShadow: "5px 5px 5px 8px rgba(0, 0, 0, 0.2)"
        }}
      >
        <HeaderTitle title="Category creation" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="New category"
                label="New category"
                variant="outlined"
                fullWidth
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
                required
                InputProps={{
                  style: {
                    backgroundColor: "#F6FBFF",
                     
                  }
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<CheckIcon />}
                    color="success"
                  >
                    CREATE CATEGORY
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<ClearOutlinedIcon />}
                    color="error"
                  >
                    CANCEL CATEGORY CREATION
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}
