// my solution 
// P language
// R response in that lng (str)
// E 'dutch' => 'Welkom'
// P use a switch statement

function greet(language) {
    switch (language) {
        case 'english':
            return 'Welcome';
            break;
        case 'czech':
            return 'Vitejte';
            break;
        case 'danish':
            return 'Velkomst';
            break;
        case 'dutch':
            return 'Welkom';
            break;
        case 'estonian':
            return 'Tere tulemast';
            break;
        case 'finnish':
            return 'Tervetuloa';
            break;
        case 'flemish':
            return 'Welgekomen';
            break;
        case 'french':
            return 'Bienvenue';
            break;
        case 'german':
            return 'Willkommen';
            break;
        case 'irish':
            return 'Failte';
            break;
        case 'latvian':
            return 'Gaidits'
            break;
        case 'italian':
            return 'Benvenuto';
            break;
        case 'lithuanian':
            return 'Laukiamas';
            break;
        case 'polish':
            return 'Witamy';
            break;
        case 'spanish':
            return 'Bienvenido';
            break;
        case 'swedish':
            return 'Valkommen';
            break;
        case 'welsh':
            return 'Croeso';
            break;
        default:
            return 'Welcome';
            break;
    }
}

// codewars solution
function greet(language) {
    var welcomes = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    };
    return language in welcomes ? welcomes[language] : welcomes.english;
  };