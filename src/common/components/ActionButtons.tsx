import IconButton from "@mui/material/IconButton/IconButton"
import SchoolIcon from "@mui/icons-material/School"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteIcon from "@mui/icons-material/Delete"

export type ActionButtonsPropsType = {
  onClickDelete: () => void
  onClickEdit: () => void
}

export const ActionButtons: React.FC<ActionButtonsPropsType> = ({
  onClickDelete,
  onClickEdit,
}) => {
  return (
    <>
      <IconButton aria-label="learn">
        <SchoolIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={onClickEdit}>
        <ModeEditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={onClickDelete}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}
