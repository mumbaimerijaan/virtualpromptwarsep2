import React from 'react';

// 1. Register as a Voter
export const RegisterVoterPage = () => (
  <div>
    <h1>Register as a New Voter</h1>
    
    <h2>1. Eligibility</h2>
    <ul>
      <li>Must be 18+ years old</li>
      <li>Indian citizen</li>
      <li>Resident of constituency</li>
    </ul>

    <h2>2. Documents Required</h2>
    <ul>
      <li>Proof of age (Birth certificate / 10th marksheet)</li>
      <li>Address proof (Aadhar, electricity bill, etc.)</li>
      <li>Passport-size photo</li>
    </ul>

    <h2>3. Steps</h2>
    <ol>
      <li>Fill Form 6</li>
      <li>Upload documents</li>
      <li>Submit application</li>
      <li>Verification by BLO</li>
    </ol>

    <h2>4. Outcome</h2>
    <ul>
      <li>Voter ID (EPIC) generated</li>
      <li>Name added to voter list</li>
    </ul>

    <button>Go to Official Registration Portal</button>
  </div>
);

// 2. Check Name in Voter List
export const CheckVoterListPage = () => (
  <div>
    <h1>Check Your Name in Voter List</h1>

    <h2>1. Search Options</h2>
    <ul>
      <li>By Name + DOB</li>
      <li>By EPIC Number</li>
    </ul>

    <h2>2. Input Fields</h2>
    <ul>
      <li>Name</li>
      <li>Date of Birth</li>
      <li>State / District</li>
    </ul>

    <h2>3. Results</h2>
    <ul>
      <li>Found → Show polling booth details</li>
      <li>Not Found → Suggest registration</li>
    </ul>

    <button>Search Now</button>
  </div>
);

// 3. Update / Correct Details
export const UpdateDetailsPage = () => (
  <div>
    <h1>Update or Correct Your Voter Details</h1>

    <h2>1. Common Updates</h2>
    <ul>
      <li>Address change</li>
      <li>Name correction</li>
      <li>Photo update</li>
    </ul>

    <h2>2. Required Form</h2>
    <ul>
      <li>Form 8</li>
    </ul>

    <h2>3. Steps</h2>
    <ol>
      <li>Fill Form 8</li>
      <li>Upload supporting documents</li>
      <li>Submit request</li>
      <li>Verification</li>
    </ol>

    <button>Update Details</button>
  </div>
);

// 4. Voting Process Guide
export const VotingProcessPage = () => (
  <div>
    <h1>How to Vote</h1>

    <h2>1. Before Voting</h2>
    <ul>
      <li>Check your name in voter list</li>
      <li>Know your polling booth</li>
      <li>Carry valid ID</li>
    </ul>

    <h2>2. At Polling Booth</h2>
    <ul>
      <li>Identity verification</li>
      <li>Ink mark applied</li>
      <li>Cast vote using EVM</li>
    </ul>

    <h2>3. After Voting</h2>
    <ul>
      <li>Confirm vote (VVPAT)</li>
      <li>Exit polling station</li>
    </ul>

    <h2>Important Notes</h2>
    <ul>
      <li>Voting is confidential</li>
      <li>No mobile usage inside booth</li>
    </ul>
  </div>
);

// 5. How Elections Work
export const HowElectionsWorkPage = () => (
  <div>
    <h1>Understanding the Election Process</h1>

    <h2>1. Announcement</h2>
    <ul>
      <li>Election dates declared</li>
    </ul>

    <h2>2. Nomination</h2>
    <ul>
      <li>Candidates file nominations</li>
    </ul>

    <h2>3. Campaigning</h2>
    <ul>
      <li>Public campaigns and debates</li>
    </ul>

    <h2>4. Voting</h2>
    <ul>
      <li>Citizens cast votes</li>
    </ul>

    <h2>5. Counting & Results</h2>
    <ul>
      <li>Votes counted</li>
      <li>Winner declared</li>
    </ul>
  </div>
);

// 6. Key Terms / Concepts
export const KeyTermsPage = () => (
  <div>
    <h1>Important Terms</h1>
    <ul>
      <li>EPIC: Voter ID number</li>
      <li>EVM: Electronic Voting Machine</li>
      <li>VVPAT: Vote verification system</li>
      <li>BLO: Booth Level Officer</li>
      <li>SIR: Special Intensive Revision</li>
    </ul>
  </div>
);

// 7. Updates / Events
export const UpdatesPage = () => (
  <div>
    <h1>Latest Updates</h1>

    <div>
      <h2>General Elections 2024 – Phase 3</h2>
      <p>Date: TBD</p>
      <p>Short description of phase 3 elections.</p>
    </div>

    <div>
      <h2>National Voters’ Day</h2>
      <p>Date: Jan 25</p>
      <p>Short description of National Voters' Day.</p>
    </div>
  </div>
);

// 8. Other Participants
export const ElectionParticipantsPage = () => (
  <div>
    <h1>Who Conducts Elections</h1>

    <h2>Roles:</h2>
    <ul>
      <li>Polling Officers</li>
      <li>Election Observers</li>
      <li>Volunteers</li>
    </ul>

    <p>Explain their role in ensuring smooth elections</p>
  </div>
);

// 9. Fallback / Help Page
export const FallbackHelpPage = () => (
  <div>
    <h1>Need Help?</h1>
    <p>We couldn’t understand your request.</p>

    <h2>Options:</h2>
    <ul>
      <li>Register as voter</li>
      <li>Check voter list</li>
      <li>Update details</li>
      <li>Learn about voting</li>
    </ul>

    <h2>Support:</h2>
    <p>Contact support via email</p>
  </div>
);
