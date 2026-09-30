// Define the Gaming Club object
const gamingClub = {
    name: "Pixel Punchers",
    maxMembers: 5,
    members: ["ShadowSlayer", "PixelQueen", "TurboGamer"],
    gamesAvailable: ["Valorant", "FIFA 26", "Tekken 8"],

    // Method to display club info
    showInfo: function() {
        const statusDiv = document.getElementById("club-status");
        if (statusDiv) {
            statusDiv.innerHTML = `<p>Club: <strong>${this.name}</strong> | Active Games: ${this.gamesAvailable.join(", ")}</p>`;
        }
    },

    // Method to add a member
    addMember: function(gamerTag) {
        if (this.members.length < this.maxMembers) {
            this.members.push(gamerTag);
            this.updateMemberList();
            return true;
        } else {
            alert("Club is full!");
            return false;
        }
    },

    // Method to render members to the webpage
    updateMemberList: function() {
        const listEl = document.getElementById("memberList");
        if (listEl) {
            listEl.innerHTML = "";
            this.members.forEach(member => {
                const li = document.createElement("li");
                li.textContent = member;
                listEl.appendChild(li);
            });
        }
    }
};

// Helper function for the HTML button
function addMemberFromInput() {
    const inputEl = document.getElementById("memberName");
    const name = inputEl.value.trim();
    if (name) {
        gamingClub.addMember(name);
        inputEl.value = "";
    }
}

// Initialize the page on load
window.onload = function() {
    gamingClub.showInfo();
    gamingClub.updateMemberList();
};
