// File: client/src/pages/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
    return (
      <div className="py-16 min-h-screen container-custom">
        <h1 className="text-4xl font-nighty mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-3xl">
          <h2>Your Privacy Matters</h2>
          <p>
            At MotivHater, we take your privacy as seriously as we take our 
            mission to combat procrastination. Here's how we handle your data:
          </p>
  
          <h3>Information We Collect</h3>
          <ul>
            <li>Email addresses from voluntary sign-ups</li>
            <li>Basic usage analytics (how often you procrastinate)</li>
            <li>Device information to improve our service</li>
          </ul>
  
          <h3>How We Use Information</h3>
          <p>
            We only use your data to:
            <br />
            - Send motivational reminders (or gentle roasts)
            <br />
            - Improve our anti-procrastination features
            <br />
            - Never share with third parties
          </p>
  
          <p className="text-muted-foreground italic mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  }