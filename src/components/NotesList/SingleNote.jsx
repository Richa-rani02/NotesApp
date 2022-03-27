import "./NotesList.css";
export const Note=()=>{

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    return(
     <div class = "notes-card-wrapper">
            <div class = "card-top" style={{"background-color": "pink"}}></div>
            <div class = "task-holder">
                <span class = "note-card-label top-gutter-sm" style={{"backgroundColor": "var(--accent-color)"}}> label
                </span>
                <h4 className="note-card-title">title</h4>
                <p className = "note-card-desc top-gutter-sm"style={{"background-color": ""}}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore tenetur ab!
                </p>
                <div className="note-card-btn auto-margin top-gutter-sm">
                    <i class = "far fa-edit mr-3" style={{"color" : "colors.primaryColor", "cursor" : "pointer"}} onClick = ""></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors.primaryColor, "cursor" : "pointer"}} onClick = ""></i>
                </div>
        </div>
        </div>
    )
}