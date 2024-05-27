import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          27 de mayo de 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          label="Título"
          type="text"
          variant="filled"
          placeholder="Ingrese un título"
          sx={{ border: "none", mb: 1 }}
          fullWidth
        />
        <TextField
          type="text"
          variant="filled"
          placeholder="¿Qué sucedió el día de hoy?"
          sx={{ border: "none", mb: 1 }}
          fullWidth
          multiline
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
