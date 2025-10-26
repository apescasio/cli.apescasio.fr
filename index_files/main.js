var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

let currentDirectory = "";
const scriptFiles = ["pc_newemployee.ps1", "find_excelinventory.ps1", "exportpc.ps1", "importpc.ps1", "set-clipboard.ps1"];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();

  // Check URL hash and auto-execute commands
  const urlHash = window.location.hash.substring(1); // Remove the # symbol
  if (urlHash === 'discord') {
    // Wait for banner to finish, then execute discord command
    setTimeout(function () {
      addLine("visitor@cli.apescasio.fr:~$ discord", "no-animation", 0);
      commander("discord");
    }, banner.length * 80 + 1000); // Wait for banner animation to complete
  }
  if (urlHash === 'lhc') {
    // Wait for banner to finish, then execute lhc command
    setTimeout(function () {
      addLine("visitor@cli.apescasio.fr:~$ echo $lhc", "no-animation", 0);
      commander("echo $lhc");
    }, banner.length * 80 + 1000); // Wait for banner animation to complete
  }
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!😠",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;

      if (currentDirectory === "scripts") {
        addLine("visitor@cli.apescasio.fr:~/scripts$ " + command.innerHTML, "no-animation", 0);
      } else {
        addLine("visitor@cli.apescasio.fr:~$ " + command.innerHTML, "no-animation", 0);
      }

      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }

    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "sudo su":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "sudo rm /* -rf":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "rm /* -rf":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "rm /*":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "rm":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "rm ":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "sudo rm /*":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "tkn":
      addLine("For Gilles", "color2", 80);
      setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=6j1BEga_BIM&ab_channel=BandaiNamcoEntertainmentAmerica');
      }, 1000);
      break;
    case "fr":
      addLine("Putting everything in 'Français'...", "color2", 80);
      setTimeout(function () {
        window.location.href = 'https://clifr.apescasio.fr/';
      }, 1000);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:him@apescasio.fr">him@apescasio.fr</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "cls":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "uptime":
      const startDate = new Date('2022-09-01T00:00:00');
      const currentDate = new Date();
      const uptimeMs = currentDate - startDate;

      const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((uptimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));

      const now = new Date();
      const timeString = now.toTimeString().split(' ')[0]; // Gets HH:MM:SS format

      const uptimeMessage = ` ${timeString} up ${days} days, ${hours}:${minutes.toString().padStart(2, '0')},  0 user,  load average: 0.11, 0.10, 0.08`;

      addLine(uptimeMessage, "color2", 80);
      break;
    case "man":
      loopLines(man, "color2 margin", 80);
      setTimeout(function () {
        window.open('https://memo.apescasio.fr');
      }, 4000);

      break;
    case "man azure":
      addLine("Opening docs on 'Azure'...", "color2", 80);
      loopLines(docsazure, "color2 margin", 80);

      setTimeout(function () {
        window.open(msazure, '_blank');
        window.open(azuredev, '_blank');
        window.open(microsoft365, '_blank');
        window.open(memoazure, '_blank');

      }, 1000);
      break;
    case "man copilot":
      addLine("Opening docs on 'Copilot'...", "color2", 80);
      loopLines(docscopilot, "color2 margin", 80);

      setTimeout(function () {
        window.open(mscopilot, '_blank');
        window.open(copilotstudio, '_blank');
        window.open(microsoft365, '_blank');
        window.open(copilotstudiotrial, '_blank');
        window.open(memocopilot, '_blank');

      }, 1000);
      break;
    case "man intune":
      addLine("Opening docs on 'Intune'...", "color2", 80);
      loopLines(docsintune, "color2 margin", 80);

      setTimeout(function () {
        window.open(msintune, '_blank');
        window.open(intunewin32, '_blank');
        window.open(microsoft365, '_blank');
        window.open(memointune, '_blank');

      }, 1000);
      break;
    case "man python":
      addLine("Opening docs on 'Python'...", "color2", 80);
      loopLines(docspython, "color2 margin", 80);

      setTimeout(function () {
        window.open(pythoncs, '_blank');
        window.open(pythonapituto, '_blank');
        window.open(pythonprojects, '_blank');
        window.open(memopython, '_blank');

      }, 1000);
      break;
    case "discord":
      loopLines(discord, "color2 margin", 80);
      setTimeout(function () {
        window.open('https://discord.com');
      }, 4000);

      break;
    case "echo $lhc":
      loopLines(lhc, "color2 margin", 80);
      break;
    case "echo $love":
      loopLines(love, "color2 margin", 80);
      // Set zoom to 80% using CSS transform
      break;
    case "echo $student":
      loopLines(student, "color2 margin", 80);
      // Set zoom to 80% using CSS transform
      document.body.style.transform = "scale(0.8)";
      document.body.style.transformOrigin = "0 0";
      document.body.style.width = "125%";
      document.body.style.height = "125%";
      break;
    case "echo $him":
      loopLines(him, "color2 margin", 80);
      break;
    case "echo $ekko":
      loopLines(ekko, "color2 margin", 80);
      break;
    case "echo $iso":
      const originalScrollBehavior = window.scrollTo;
      window.scrollTo = function () { };

      loopLines(iso, "color2 margin", 80);
      document.body.style.transform = "scale(0.7)";
      document.body.style.transformOrigin = "0 0";
      document.body.style.width = "125%";
      document.body.style.height = "125%";

      // Re-enable scrolling after the ASCII art is displayed
      setTimeout(function () {
        window.scrollTo = originalScrollBehavior;
      }, iso.length * 80 + 100);
      break;
    // socials
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "pwd":
      if (currentDirectory === "scripts") {
        // List the contents of the "scripts" directory
        addLine("/home/visitor/scripts", "color2", 0);

      } else {
        addLine("/home/visitor", "color2", 0);

      }
      break;

    // All posssible 'ls' commands
    case "ls":
      if (currentDirectory === "scripts") {
        // List the contents of the "scripts" directory
        addLine(scriptFiles.join(" "), "color2", 0);
      } else {
        // List the contents of the current directory
        addLine("scripts", "folder", 0);
      }
      break;
    case "ls ..":
      if (currentDirectory === "scripts") {
        // List the contents of the "~" directory
        addLine("scripts", "folder", 0);

      } else {
        // List nothing
        addLine("", "folder", 0);

      }
      break;

    case "ls ~":
      addLine("scripts", "folder", 0);
      break;
    case "ls scripts":
      addLine(scriptFiles.join(" "), "color2", 0);
      break;
    case "ls ./scripts":
      addLine(scriptFiles.join(" "), "color2", 0);
      break;
    case "ls /home/visitor/scripts":
      addLine(scriptFiles.join(" "), "color2", 0);
      break;
    case "ls ~/scripts":
      addLine(scriptFiles.join(" "), "color2", 0);
      break;

    // All the possible "cd" commands
    case "cd scripts":
      currentDirectory = "scripts";
      const sheet1 = document.styleSheets[0];
      sheet1.addRule('#liner::before', 'content: "visitor@cli.apescasio.fr:~/scripts$"');
      break;
    case "cd ./scripts":
      currentDirectory = "scripts";
      const sheet2 = document.styleSheets[0];
      sheet2.addRule('#liner::before', 'content: "visitor@cli.apescasio.fr:~/scripts$"');
      break;
    case "cd ..":
      currentDirectory = "";
      const sheet3 = document.styleSheets[0];
      sheet3.addRule('#liner::before', 'content: "visitor@cli.apescasio.fr:~$"');
      break;
    case "cd":
      currentDirectory = "";
      const sheet4 = document.styleSheets[0];
      sheet4.addRule('#liner::before', 'content: "visitor@cli.apescasio.fr:~$"');
      break;
    case "cd /home/visitor/scripts":
      currentDirectory = "scripts";
      const sheet5 = document.styleSheets[0];
      sheet5.addRule('#liner::before', 'content: "visitor@cli.apescasio.fr:~/scripts$"');
      break;

    // All possible "cat" commadns 
    case "cat pc_newemployee.ps1":
      if (currentDirectory === "scripts") {
        setTimeout(function () {
          window.open('https://memo.apescasio.fr/en/docs/powershell/new-employee');
        }, 1000);
      } else {
        // List the contents of the current directory
        addLine("No such file or directory", "color2", 0);
      }
      break;
    case "cat find_excelinventory.ps1":
      if (currentDirectory === "scripts") {
        setTimeout(function () {
          window.open('https://memo.apescasio.fr/en/docs/powershell/search-excel');
        }, 1000);
      } else {
        // List the contents of the current directory
        addLine("No such file or directory", "color2", 0);
      }
      break;
    case "cat exportpc.ps1":
      if (currentDirectory === "scripts") {
        setTimeout(function () {
          window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
        }, 1000);
      } else {
        // List the contents of the current directory
        addLine("No such file or directory", "color2", 0);
      }
      break;
    case "cat importpc.ps1":
      if (currentDirectory === "scripts") {
        setTimeout(function () {
          window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
        }, 1000);
      } else {
        // List the contents of the current directory
        addLine("No such file or directory", "color2", 0);
      }
      break;
    case "cat ~/scripts/pc_newemployee.ps1.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/new-employee');
      }, 1000);
      break;
    case "cat ~/scripts/find_excelinventory.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/search-excel');
      }, 1000);
      break;
    case "cat ~/scripts/exportpc.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
      }, 1000);
      break;
    case "cat ~/scripts/importpc.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
      }, 1000);
      break;
    case "cat scripts/pc_newemployee.ps1.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/new-employee');
      }, 1000);
      break;
    case "cat scripts/find_excelinventory.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/search-excel');
      }, 1000);
      break;
    case "cat scripts/exportpc.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
      }, 1000);
      break;
    case "cat scripts/importpc.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
      }, 1000);
      break;
    case "cat ./scripts/pc_newemployee.ps1.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/new-employee');
      }, 1000);
      break;
    case "cat ./scripts/find_excelinventory.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/search-excel');
      }, 1000);
      break;
    case "cat ./scripts/exportpc.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
      }, 1000);
      break;
    case "cat ./scripts/importpc.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/migrate-PC-employee');
      }, 1000);
      break;
    case "cat set-clipboard.ps1":
      if (currentDirectory === "scripts") {
        setTimeout(function () {
          window.open('https://memo.apescasio.fr/en/docs/powershell/config-clipboard');
        }, 1000);
      } else {
        // List the contents of the current directory
        addLine("No such file or directory", "color2", 0);
      }
      break;
    case "cat ~/scripts/set-clipboard.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/config-clipboard');
      }, 1000);
      break;
    case "cat scripts/set-clipboard.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/config-clipboard');
      }, 1000);
      break;
    case "cat ./scripts/set-clipboard.ps1":
      setTimeout(function () {
        window.open('https://memo.apescasio.fr/en/docs/powershell/config-clipboard');
      }, 1000);
      break;

    // Handle cat discord command
    case "cat discord":
      addLine("Opening Handbook of an admin server discord", "color2", 80);
      setTimeout(function () {
        window.open(discord, "_blank");
      }, 1000);
      break;

    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}