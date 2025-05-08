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
          <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1.5rem" }}>dev jariwala</h1>
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
            <div style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
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
          </div>
        </section>

      </main>
    </div>
  );
}
