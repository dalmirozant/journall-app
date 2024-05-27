import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          right: 50,
          bottom: 50,
          opacity: 0.4,
          position: "fixed",
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
        }}
      >
        <AddOutlined fontSize="30" />
      </IconButton>
    </JournalLayout>
  );
};
