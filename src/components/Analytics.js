import React from 'react'
import './Analytics.css'
import NavBar from './NavBar'



class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      goals: {
        words: 100,
        proficiency: "Intermediate",
      },
      resources: [
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/",
        },
        {
          name: "Memrise",
          url: "https://www.memrise.com/",
        },
      ],
      reminders: [
        {
          title: "Practice Session",
          time: "10:00 AM",
          completed: false,
        },
        {
          title: "Test",
          time: "2:00 PM",
          completed: false,
        },
      ],
      feedback: {
        strengths: ["Vocabulary", "Grammar"],
        weaknesses: ["Speaking", "Listening"],
        recommendations: [
          "Focus on speaking and listening practice",
          "Try using language learning apps with speech recognition",
        ],
      },
      community: {
        members: 50,
        posts: [
          {
            author: "Jane",
            text: "Does anyone have any good tips for practicing pronunciation?",
            likes: 10,
            comments: [
              {
                author: "John",
                text: "Try using a pronunciation guide or tutor",
                likes: 5,
              },
            ],
          },
        ],
      },
      personalized: {
        language: "Spanish",
        schedule: [
          {
            title: "Monday",
            reminder: "Practice vocabulary",
            completed: false,
          },
          {
            title: "Tuesday",
            reminder: "Watch a Spanish movie",
            completed: false,
          },
          {
            title: "Wednesday",
            reminder: "Take a grammar quiz",
            completed: false,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className='an-container'>
        <NavBar />
        <p>Progress: {this.state.progress}%</p>
        <p>Words to learn: {this.state.goals.words}</p>
        <p>Proficiency level: {this.state.goals.proficiency}</p>
        <h2>Learning Resources</h2>
        <ul>
          {this.state.resources.map((resource) => (
            <li key={resource.name}>
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
        <h2>Reminders</h2>
        <ul>
          {this.state.reminders.map((reminder) => (
            <li key={reminder.title}>
              {reminder.title} at {reminder.time}{" "}
              {reminder.completed ? "(completed)" : "(not completed)"}
            </li>
          ))}
        </ul>
        <h2>Feedback and Insights</h2>
        <p>Strengths: {this.state.feedback.strengths.join(", ")}</p>
        <p>Weaknesses: {this.state.feedback.weaknesses.join(", ")}</p>
        <p>Recommendations:</p>
        <ul>
          {this.state.feedback.recommendations.map((recommendation) => (
            <li key={recommendation}>{recommendation}</li>
          ))}
        </ul>
            </div>
    )}
          }

           
export default Analytics
