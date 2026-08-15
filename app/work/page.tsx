import { Layout } from "../../components/layout";
import { Navbar } from "../../components/navigation";

export default function WorkPage() {
  return (
    <Layout>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "8rem 24px",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <h1 style={{ margin: 0, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>
            Work
          </h1>
          <p style={{ marginTop: "1rem", color: "inherit", opacity: 0.8, fontSize: "1rem", lineHeight: 1.8 }}>
            Placeholder for the REVEX Work experience. Core content will be added later.
          </p>
        </div>
      </main>
    </Layout>
  );
}
