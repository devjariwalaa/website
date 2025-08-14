"use client";
import VantaBackground from "../components/VantaBackground";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <head>
        <title>Dev Jariwala | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <VantaBackground />

      <main
        style={{
          position: "relative",
          zIndex: 10,
          fontFamily: "Arial, sans-serif",
          color: "white",
          padding: "2rem 1rem",
          maxWidth: "100%",
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        {/* Intro Section */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "2rem", paddingRight: "2rem" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Dev Jariwala</h1>
          <p style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            color: "#e0e0e0",
            maxWidth: "900px",
            marginBottom: "1rem"
          }}>
            i'm a builder & engineer determined to build impactful software and create real-world applications that solve meaningful problems. i'm currently seeking internship opportunities to gain hands-on experience and grow alongside innovative companies.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <a href="https://github.com/devjariwalaa" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dev-jariwala-b82b5b2b5/" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </section>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="#education" style={{ textDecoration: "none", color: "#bbb" }}>

          </a>
        </div>

        {/* Education Block */}
        <section id="education" style={{
          padding: "4rem 2rem 1rem",
        }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(20,20,20,0.8), rgba(40,40,40,0.8))",
            backdropFilter: "blur(12px)",
            padding: "3rem",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            maxWidth: "1200px",
            margin: "0 auto 1rem auto",
            color: "white"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>education</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "flex-start", alignItems: "center" }}>
              <a href="https://ece.msu.edu/undergraduate/computer-engineering" target="_blank" rel="noopener noreferrer">
                <img src="/msu-logo.png" alt="MSU Logo" style={{ width: "220px" }} />
              </a>
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Michigan State University, East Lansing</h3>
                <p>Currently pursuing a degree in Computer Engineering. Relevant coursework includes:</p>
                <ul style={{ marginTop: "1rem", color: "#bbb" }}>
                  <li>Calculus I, II, III</li>
                  <li>Physics 183 (Physics for Scientists and Engineers)</li>
                  <li>CSE 231 (Introduction to Programming in Python)</li>
                  <li>CSE 232 (Programming in C++)</li>
                  <li>CSE 260 (Discrete Structures in Computer Science)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section style={{
          padding: "2rem 2rem 3rem",
        }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(20,20,20,0.8), rgba(40,40,40,0.8))",
            backdropFilter: "blur(12px)",
            padding: "3rem",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            maxWidth: "1200px",
            margin: "0 auto",
            color: "white"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>projects</h2>
            
            {/* DAuth Project */}
            <div style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              marginBottom: "2rem"
            }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                <a href="https://github.com/devjariwalaa/DAuth.git" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
                  DAuth — authentication built right
                </a>
              </h3>
              <p style={{ color: "#ccc", marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                dauth is a full-stack authentication service i built from scratch using fastapi, postgresql, and redis. it's made for real-world apps that need secure, modern login flows. it supports jwt, refresh tokens, google oauth2, and session handling with redis. i built it to be production-ready, open source, and something any dev can actually use. it handles token revoking, rate limiting, and password security the right way—no shortcuts. i designed this without the use of firebase. i learned how jwt tokens work in real time and tested all my endpoint using Postman. once deployed, i can use dauth in any application i choose.
              </p>
              <ul style={{ color: "#bbb" }}>
                <li>JWT + refresh token flow</li>
                <li>OAuth2 (Google login)</li>
                <li>Redis-backed sessions</li>
                <li>Rate limiting + hashed passwords</li>
                <li>Token blacklisting & session invalidation</li>
              </ul>
            </div>

            {/* Wicketly Project */}
            <div style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              marginBottom: "2rem"
            }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
                  Wicketly — real time cricket scoring application
                </a>
              </h3>
              <p style={{ color: "#ccc", marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                wicketly is a full-stack scoring platform built with react (typescript), supabase (postgresql), and google cloud. it supports 100% real-time ball-by-ball updates for matches up to 50 overs. the scoring engine handles 20+ cricket rules including runs, extras, wickets, over transitions, and chase logic, enabling instant required run rate & win prediction calculations.
              </p>
              <ul style={{ color: "#bbb" }}>
                <li>Real-time ball-by-ball scoring updates</li>
                <li>Advanced cricket rules engine with 20+ rules</li>
                <li>Multi-tenant architecture with role-based access</li>
                <li>Row-Level Security and OAuth 2.0 Google login</li>
                <li>Instant win prediction and run rate calculations</li>
              </ul>
            </div>

            {/* CricketConnect Project */}
            <div style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              marginBottom: "2rem"
            }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
                  CricketConnect — cricket q&a + match history (mvp)
                </a>
              </h3>
              <p style={{ color: "#ccc", marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                cricketconnect is a flutter mobile mvp (ios/android) with firebase authentication for secure sign-in and persistent sessions. it uses firestore to save and retrieve user match history in real time, and integrates an ollama-powered chatbot for cricket q&a and basic match insights.
              </p>
              <ul style={{ color: "#bbb" }}>
                <li>Flutter mobile app for iOS and Android</li>
                <li>Firebase Authentication and Firestore integration</li>
                <li>Ollama-powered chatbot for cricket Q&A</li>
                <li>Match history tracking and real-time updates</li>
                <li>Core flows: login, match summaries, history, and chat</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section style={{
          padding: "2rem 2rem 3rem",
        }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(20,20,20,0.8), rgba(40,40,40,0.8))",
            backdropFilter: "blur(12px)",
            padding: "3rem",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            maxWidth: "1200px",
            margin: "0 auto",
            color: "white"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>hobbies</h2>
            <div style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-around", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🏏 Cricket</h3>
                 
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🏀 Basketball</h3>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
