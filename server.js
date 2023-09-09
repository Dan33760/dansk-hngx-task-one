const express = require('express');
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    const date = new Date();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday', 'Sunday'];
    res.status(200).json({
        slack_name: req.query.slack_name,
        current_day: `${days[date.getDay()-1]}`,
        utc_time: `${date.toISOString()}`,
        track: req.query.track,
        github_file_url: "https://github.com/Dan33760/dansk-hngx-task-one.git/server.js",
        github_repo_url: "https://github.com/Dan33760/dansk-hngx-task-one.git",
        status_code: 200
      });
})



const PORT  = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("My server running on port: ", PORT);
})