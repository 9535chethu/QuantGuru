// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainContent from './components/MainContent';
import Login from './components/Login';
import ArithmeticProblems from './components/ArithmeticProblems';
import VerbalAbility from './components/VerbalAbility';
import Aptitude from './components/Aptitude';
import Marketing from './components/Marketing';
import AcePlacements from './components/AcePlacements';
import CareerSuccess from './components/CareerSuccess';
import ResetPassword from './components/ResetPassword';
import OnlineTest from './components/OnlineTest';
import OnlineAptitudeTest from './components/OnlineAptitudeTest';
import AptitudeTest1 from "./components/AptitudeTest1";
import AptitudeTest2 from "./components/AptitudeTest2";
import AptitudeTest3 from "./components/AptitudeTest3";
import AptitudeTest4 from "./components/AptitudeTest4";
import AptitudeTest5 from "./components/AptitudeTest5";
import AptitudeTest6 from "./components/AptitudeTest6";
import AptitudeTest7 from "./components/AptitudeTest7";
import AptitudeTest8 from "./components/AptitudeTest8";
import AptitudeTest9 from "./components/AptitudeTest9";
import AptitudeTest10 from "./components/AptitudeTest10";
import RandomTest from "./components/RandomTest";
import OnlineVerbalAbilityTest from "./components/OnlineVerbalAbilityTest";
import VerbalTest1 from './components/VerbalTest1';
import VerbalTest2 from './components/VerbalTest2';
import VerbalTest3 from './components/VerbalTest3';
import VerbalTest4 from './components/VerbalTest4';
import VerbalTest5 from './components/VerbalTest5';
import VerbalTest6 from './components/VerbalTest6';
import VerbalTest7 from './components/VerbalTest7';
import VerbalTest8 from './components/VerbalTest8';
import VerbalTest9 from './components/VerbalTest9';
import VerbalTest10 from './components/VerbalTest10';
import VerbalRandom from './components/VerbalRandom';
import OnlineLogicalReasoningTest from './components/OnlineLogicalReasoningTest';
import LogicalReasoning1 from './components/LogicalReasoning1';
import LogicalReasoning2 from './components/LogicalReasoning2';
import LogicalReasoning3 from './components/LogicalReasoning3';
import LogicalReasoning4 from './components/LogicalReasoning4';
import LogicalReasoning5 from './components/LogicalReasoning5';
import LogicalReasoning6 from './components/LogicalReasoning6';
import LogicalReasoning7 from './components/LogicalReasoning7';
import LogicalReasoning8 from './components/LogicalReasoning8';
import LogicalReasoning9 from './components/LogicalReasoning9';
import LogicalReasoning10 from './components/LogicalReasoning10';
import LogicalReasoningRandom from './components/LogicalReasoningRandom';
import OnlineGeneralKnowledgeTest from './components/OnlineGeneralKnowledgeTest';
import GeneralKnowledge1 from './components/GeneralKnowledge1';
import GeneralKnowledge2 from './components/GeneralKnowledge2';
import GeneralKnowledge3 from './components/GeneralKnowledge3';
import GeneralKnowledge4 from './components/GeneralKnowledge4';
import GeneralKnowledge5 from './components/GeneralKnowledge5';
import GeneralKnowledge6 from './components/GeneralKnowledge6';
import GeneralKnowledge7 from './components/GeneralKnowledge7';
import GeneralKnowledge8 from './components/GeneralKnowledge8';
import GeneralKnowledge9 from './components/GeneralKnowledge9';
import GeneralKnowledge10 from './components/GeneralKnowledge10';
import OnlineVerbalReasoningTest from './components/OnlineVerbalReasoningTest';
import VerbalReasoningTest1 from './components/VerbalReasoningTest1';
import VerbalReasoningTest2 from './components/VerbalReasoningTest2';
import VerbalReasoningTest3 from './components/VerbalReasoningTest3';
import VerbalReasoningTest4 from './components/VerbalReasoningTest4';
import VerbalReasoningTest5 from './components/VerbalReasoningTest5';
import VerbalReasoningTest6 from './components/VerbalReasoningTest6';
import VerbalReasoningTest7 from './components/VerbalReasoningTest7';
import VerbalReasoningTest8 from './components/VerbalReasoningTest8';
import VerbalReasoningTest9 from './components/VerbalReasoningTest9';
import VerbalReasoningTest10 from './components/VerbalReasoningTest10';
import Testemonials from './components/Testemonials'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/arithmetic-problems" element={<MainContent><ArithmeticProblems /></MainContent>} />
        <Route path="/verbal-ability" element={<MainContent><VerbalAbility /></MainContent>} />
        <Route path="/aptitude" element={<MainContent><Aptitude /></MainContent>} />
        <Route path="/ace-placements" element={<MainContent><AcePlacements /></MainContent>} />
        <Route path="/marketing" element={<MainContent><Marketing /></MainContent>} />
        <Route path="/career-success" element={<MainContent><CareerSuccess /></MainContent>} />
        <Route path="/online-test" element={<MainContent><OnlineTest /></MainContent>} />
        <Route path="/online-aptitude-test" element={<MainContent><OnlineAptitudeTest /></MainContent>} />
        <Route path="/AptitudeTest1" element={<MainContent><AptitudeTest1 /></MainContent>} />
        <Route path="/AptitudeTest2" element={<MainContent><AptitudeTest2 /></MainContent>} />
        <Route path="/AptitudeTest3" element={<MainContent><AptitudeTest3 /></MainContent>} />
        <Route path="/AptitudeTest4" element={<MainContent><AptitudeTest4 /></MainContent>} />
        <Route path="/AptitudeTest5" element={<MainContent><AptitudeTest5 /></MainContent>} />
        <Route path="/AptitudeTest6" element={<MainContent><AptitudeTest6 /></MainContent>} />
        <Route path="/AptitudeTest7" element={<MainContent><AptitudeTest7 /></MainContent>} />
        <Route path="/AptitudeTest8" element={<MainContent><AptitudeTest8 /></MainContent>} />
        <Route path="/AptitudeTest9" element={<MainContent><AptitudeTest9 /></MainContent>} />
        <Route path="/AptitudeTest10" element={<MainContent><AptitudeTest10 /></MainContent>} />
        <Route path="/RandomTest" element={<MainContent><RandomTest /></MainContent>} />
        <Route path="/online-verbal-ability-test" element={<MainContent><OnlineVerbalAbilityTest /></MainContent>} />
        <Route path="/VerbalTest1" element={<MainContent><VerbalTest1 /></MainContent>} />
        <Route path="/VerbalTest2" element={<MainContent><VerbalTest2 /></MainContent>} />
        <Route path="/VerbalTest3" element={<MainContent><VerbalTest3 /></MainContent>} />
        <Route path="/VerbalTest4" element={<MainContent><VerbalTest4 /></MainContent>} />
        <Route path="/VerbalTest5" element={<MainContent><VerbalTest5 /></MainContent>} />
        <Route path="/VerbalTest6" element={<MainContent><VerbalTest6 /></MainContent>} />
        <Route path="/VerbalTest7" element={<MainContent><VerbalTest7 /></MainContent>} />
        <Route path="/VerbalTest8" element={<MainContent><VerbalTest8 /></MainContent>} />
        <Route path="/VerbalTest9" element={<MainContent><VerbalTest9 /></MainContent>} />
        <Route path="/VerbalTest10" element={<MainContent><VerbalTest10 /></MainContent>} />
        <Route path="/VerbalRandom" element={<MainContent><VerbalRandom /></MainContent>} />
        <Route path="/online-logical-reasoning-test" element={<MainContent><OnlineLogicalReasoningTest /></MainContent>} />
        <Route path="/LogicalReasoning1" element={<MainContent><LogicalReasoning1 /></MainContent>} />
        <Route path="/LogicalReasoning2" element={<MainContent><LogicalReasoning2 /></MainContent>} />
        <Route path="/LogicalReasoning3" element={<MainContent><LogicalReasoning3 /></MainContent>} />
        <Route path="/LogicalReasoning4" element={<MainContent><LogicalReasoning4 /></MainContent>} />
        <Route path="/LogicalReasoning5" element={<MainContent><LogicalReasoning5 /></MainContent>} />
        <Route path="/LogicalReasoning6" element={<MainContent><LogicalReasoning6 /></MainContent>} />
        <Route path="/LogicalReasoning7" element={<MainContent><LogicalReasoning7 /></MainContent>} />
        <Route path="/LogicalReasoning8" element={<MainContent><LogicalReasoning8 /></MainContent>} />
        <Route path="/LogicalReasoning9" element={<MainContent><LogicalReasoning9 /></MainContent>} />
        <Route path="/LogicalReasoning10" element={<MainContent><LogicalReasoning10 /></MainContent>} />
        <Route path="/LogicalReasoningRandom" element={<MainContent><LogicalReasoningRandom /></MainContent>} />
        <Route path="/online-general-knowledge-test" element={<MainContent><OnlineGeneralKnowledgeTest /></MainContent>} />
        <Route path="/GeneralKnowledge1" element={<MainContent><GeneralKnowledge1 /></MainContent>} />
        <Route path="/GeneralKnowledge2" element={<MainContent><GeneralKnowledge2 /></MainContent>} />
        <Route path="/GeneralKnowledge3" element={<MainContent><GeneralKnowledge3 /></MainContent>} />
        <Route path="/GeneralKnowledge4" element={<MainContent><GeneralKnowledge4 /></MainContent>} />
        <Route path="/GeneralKnowledge5" element={<MainContent><GeneralKnowledge5 /></MainContent>} />
        <Route path="/GeneralKnowledge6" element={<MainContent><GeneralKnowledge6 /></MainContent>} />
        <Route path="/GeneralKnowledge7" element={<MainContent><GeneralKnowledge7 /></MainContent>} />
        <Route path="/GeneralKnowledge8" element={<MainContent><GeneralKnowledge8 /></MainContent>} />
        <Route path="/GeneralKnowledge9" element={<MainContent><GeneralKnowledge9/></MainContent>} />
        <Route path="/GeneralKnowledge10" element={<MainContent><GeneralKnowledge10 /></MainContent>} />
        <Route path="/online-verbal-reasoning-test" element={<MainContent><OnlineVerbalReasoningTest/></MainContent>} />
        <Route path="/VerbalReasoningTest1" element={<MainContent><VerbalReasoningTest1/></MainContent>} />
        <Route path="/VerbalReasoningTest2" element={<MainContent><VerbalReasoningTest2/></MainContent>} />
        <Route path="/VerbalReasoningTest3" element={<MainContent><VerbalReasoningTest3/></MainContent>} />
        <Route path="/VerbalReasoningTest4" element={<MainContent><VerbalReasoningTest4/></MainContent>} />
        <Route path="/VerbalReasoningTest5" element={<MainContent><VerbalReasoningTest5/></MainContent>} />
        <Route path="/VerbalReasoningTest6" element={<MainContent><VerbalReasoningTest6/></MainContent>} />
        <Route path="/VerbalReasoningTest7" element={<MainContent><VerbalReasoningTest7/></MainContent>} />
        <Route path="/VerbalReasoningTest8" element={<MainContent><VerbalReasoningTest8/></MainContent>} />
        <Route path="/VerbalReasoningTest9" element={<MainContent><VerbalReasoningTest9/></MainContent>} />
        <Route path="/VerbalReasoningTest10" element={<MainContent><VerbalReasoningTest10/></MainContent>} />

        <Route path="/Testemonials" element={<Testemonials />} />



        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
