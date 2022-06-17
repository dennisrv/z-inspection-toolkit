# Z-Inspection® Toolkit
This repository contains various scripts developed to assess different steps during the assessment with Z-Inspection®.

The following is a short explanation of the scripts, in which steps of the assessment process they can be used and why they were found useful.

## Template for the meeting proceedings
To start a new assessment process, we have a meeting with stakeholders, where they tell us about the system. They give us some context on where the system is used, what problem it is intended to solve, what steps they have taken to ensure the system is solving the problem, and how the system is currently used.

We found it useful to collect a written summary of this meeting, where the information is organized according to the following structure:
1. **Aim of the system**  
   Goal of the system, context, why it is used.
2. **Actors**  
   (*primary*: directly involved with the use of the AI system, and *secondary* and *tertiary* only indirectly involved with the use of the AI system)
   Who designed and implemented the system?  
   Who has authorized the deployment of the system?  
   Who is  currently using the system?  
   Who are the end users for this system?  
   Who is directly influenced by decisions made by the system?  
   Who is indirectly influenced by decisions made by the system?  
   Who is responsible for this system?  
3. **Actors' Expectation and Motivation**  
   Why would the different groups of actors want the system?  
   What are their expectations towards the system behavior?  
   What benefits are they expecting from using the system?  
4. **Actors' Concerns and Worries**  
   What problems / challenges can the actors foresee?  
   Do they have concerns regarding the use of the system?  
   What risks are they concerned about with the system? Are there any conflicts?
5. **Context where the AI system is used**  
   What additional context information about the situation where the AI system is used?  
   (e.g. urgency, budget constraints, for profit, academic, conflicts, environmental)  
   What are potential future usage of the AI system?  
6. **Interaction with the AI system**  
   What is the intended interaction between the system and its users?  
   If and how the 'human in control' aspect is envisaged?  
   Why is it like this?
7. **AI Technology used**  
   Technical description of the AI system.  
   An important part of considering AI trustworthiness is that it is robust and if the technical description is not clear, this cannot be assessed.
8. **Clinical studies / Field Tests**  
   Was the system's performance systematically validated? (i.e. in clinical studies / field tests, ...)  
   What were the results of these studies?  
   Are the results openly available?  
9. **Intellectual Property**  
   What parts of the AI system are open access (if any)?  
   What IP regulations need to be considered when assessing / disseminating the system?  
   Does it contain confidential information that must not be published?  
   What is and how to handle the IP of the AI and of the part of the system to be examined.  
   Identify possible restrictions to the Inspection process, in this case, assess the consequences (if any)  
   Define if and when Code Reviews are needed/possible. 
10. **Legal framework**  
    What is the legal framework for use of the system?  
    What special regulations apply?  
11. **Ethics oversight and/or approval**  
    Has the AI system already undergone some kind of ethical assessment or other approval?  
    If not - why not?  
    If so, was this internal/external, volunteer/regulated, what was covered?  
    (One could argue that if they already had some, it is unlikely they will engage with Z-inspection®, but from asking the question - we also get an understanding of the gap(s))  
    Did they get a waiver?  
    Was there a clearing, but it was very light or internal and not considered sufficient?
    
With the information organized this way, people are encouraged to go through the materials again and ask questions in the document where they need additional clarifications from the stakeholders / developers. This helps bring everyone to a shared understanding of the system and it helps the stakeholders identify where they need to provide additional information on the system.


## link-youtube-timestamps.gs
When organizing the information from meetings with the template above, we found it useful to have a recording of the meetings available. This helps by providing the exact verbatim information in case the phrasing in the proceedings is imprecise. 

For easier navigation of the information in the recording, we created a script that allows to link text from a google doc to the respective positions in the youtube video of the recording. 

The script allows to provide multiple recordings with identifies, i.e. PM1 ('project meeting 1') and then creates links from text references like [PM1,0:48:13] to the video of project meeting 1 at time 48 inutes and 13 seconds.

### Installation
Open the document in google docs, then to to   
```
Extensions > Apps Script
```
This should open a new tab, with an AppsScript development interface.
Copy + paste the script into the code part, adapt the variables at the beginning of the script, save the project and click on the `Run` button above the editor.

As a next step, you need to allow the script to make changes to your documents. In the dialog, it will warn you, that Google did not verify the app.
Click on `Show advanced` and then `Go to Untitled project (unsafe)` to allow it anyways.

### Usage
After install, the original document should have a new menu item named `Custom Scripts` with the entry `Add Link`. If not, reload the document.

Clicking on `Add Link` goes through the document and replaces all the references [ID,time] with the corresponding links.


## nlp-mapping.ipynb
A common problem during the consolidation step is, that the different groups identified similar issues, but described them in their domian specific language. This makes it hard to merge the results from different WGs. 
If the WGs identified a large number of issues, manual inspection is very labour intensive.

We created a solution based on semantic textual similarity to identify groups of similar issues, which can be assessed in this jupyter notebook (created with python 3.8).

As input a csv file of issue descriptions with the columns "ID", "WG", "Title" and "Description" is required.

The approach is described in greater detail in this publication: *TODO: enter link to publication once it is published somewhere*.
