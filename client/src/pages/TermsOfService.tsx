// File: client/src/pages/TermsOfService.tsx
export default function TermsOfService() {
    return (
      <div className="py-16 min-h-screen container-custom">
        <h1 className="text-4xl font-nighty mb-8">Terms of Service</h1>
        
        <div className="prose max-w-3xl">
          <h2>The Fine Print (We Actually Read)</h2>
          <p>
            By using MotivHater, you agree to these terms - unless you're 
            procrastinating reading them, which we totally understand.
          </p>
  
          <h3>Basic Rules</h3>
          <ul>
            <li>Don't use MotivHater to procrastinate</li>
            <li>Be kind to our snarky AI</li>
            <li>No reselling of our creative insults</li>
          </ul>
  
          <h3>Limitations</h3>
          <p>
            We're not responsible for:
            <br />
            - Lost productivity hours
            <br />
            - Overdue deadlines
            <br />
            - Hurt feelings from our AI's honesty
          </p>
  
          <p className="text-muted-foreground italic mt-8">
            Effective: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  }