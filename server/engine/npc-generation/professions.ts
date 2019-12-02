import { dice } from "../rolls"

export enum SocialClass {
  Commoner = `commoner`,
  Nobility = `nobility`,
  Peasantry = `peasantry`,
  Paupery = `paupery`,
}

export enum Type {
  Family = `family`,
  Labourer = `labourer`,
  Recreation = `Recreation`,
  DnDClass = `dndClass`,
}

export enum Sector {
  Family = `family`,
  Agriculture = `agriculture`,
  Adventuring = `adventuring`,
}

export interface ProfessionData {
  sv: number
  name?: string
  type: string
  sector: string
  isHobby?: boolean
  synonyms?: string[]
  description: string
  dailyWage: number
  socialClass: string
  population?: number
  socialClassRoll(): number
}

export enum Profession {
  Abbot = `abbot`,
  Abecedarian = `abecedarian`,
  Abjurer = `abjurer`,
  Acater = `acater`,
  Accountant = `accountant`,
  Acolyte = `acolyte`,
  Acrobat = `acrobat`,
  Actor = `actor`,
  Actuary = `actuary`,
  Admiral = `admiral`,
  Adventurer = `adventurer`,
  Advisor = `advisor`,
  Advocate = `advocate`,
  Affeeror = `affeeror`,
  Agister = `agister`,
  Alchemist = `alchemist`,
  Alderman = `alderman`,
  Alienist = `alienist`,
  Almoner = `almoner`,
  AnimalCollector = `animal collector`,
  AnimalHandler = `animal handler`,
  Anthropologist = `anthropologist`,
  Apothecarist = `apothecarist`,
  Appraiser = `appraiser`,
  Apprentice = `apprentice`,
  Arborist = `arborist`,
  Archbishop = `archbishop`,
  Archeologist = `archeologist`,
  Architect = `architect`,
  Archivist = `archivist`,
  Archmage = `archmage`,
  Armorer = `armorer`,
  Arranger = `arranger`,
  Artificer = `artificer`,
  Artisan = `artisan`,
  Assassin = `assassin`,
  Assayer = `assayer`,
  AssayMaster = `assay master`,
  Astrologer = `astrologer`,
  Astronomer = `astronomer`,
  Athlete = `athlete`,
  Auctioneer = `auctioneer`,
  Bagniokeeper = `bagniokeeper`,
  Bailiff = `bailiff`,
  Baker = `baker`,
  Baler = `baler`,
  Bandit = `bandit`,
  Banker = `banker`,
  Barbarian = `barbarian`,
  Barber = `barber`,
  Bard = `bard`,
  Barkeep = `barkeep`,
  Barmaid = `barmaid`,
  Baron = `baron`,
  Bartender = `bartender`,
  Beekeeper = `beekeeper`,
  Beggar = `beggar`,
  BillboardPoster = `billboard poster`,
  Bishop = `bishop`,
  Blacksmith = `blacksmith`,
  BlacksmithsAssistant = `blacksmith's assistant`,
  Bladesmith = `bladesmith`,
  Bloodletter = `bloodletter`,
  Boatman = `boatman`,
  Bodyguard = `bodyguard`,
  Bookbinder = `bookbinder`,
  Bookkeeper = `bookkeeper`,
  Bookseller = `bookseller`,
  Bosun = `bosun`,
  Botanist = `botanist`,
  Bottler = `bottler`,
  Bouncer = `bouncer`,
  BountyHunter = `bounty hunter`,
  Bowyer = `bowyer`,
  Breeder = `breeder`,
  Brewer = `brewer`,
  Brickmason = `brickmason`,
  BroomMaker = `broom maker`,
  Buccaneer = `buccaneer`,
  Burglar = `burglar`,
  BusinessOwner = `business owner`,
  Busker = `busker`,
  Butcher = `butcher`,
  Butler = `butler`,
  CabinBoy = `cabin boy`,
  Candlemaker = `candlemaker`,
  Cantor = `cantor`,
  Captain = `captain`,
  Caravanner = `caravanner`,
  Cardinal = `cardinal`,
  Caregiver = `caregiver`,
  Carpeneter = `carpenter`,
  Carpenter = `carpenter`,
  Carter = `carter`,
  Cartographer = `cartographer`,
  Cartwright = `cartwright`,
  Castellan = `castellan`,
  Cavalier = `cavalier`,
  Celebrity = `celebrity`,
  Chancellor = `chancellor`,
  Chandler = `chandler`,
  CharcoalMaker = `charcoal maker`,
  Charioteer = `charioteer`,
  Chatelaine = `chatelaine`,
  Chef = `chef`,
  Chemist = `chemist`,
  Chief = `chief`,
  Child = `child`,
  ChimneySweeper = `chimney sweeper`,
  Choirmaster = `choirmaster`,
  CityWatch = `city watch`,
  Clergyman = `clergyman`,
  Cleric = `cleric`,
  Clerk = `clerk`,
  ClockMaker = `clock maker`,
  Clown = `clown`,
  Cobbler = `cobbler`,
  Coinsmith = `coinsmith`,
  Collector = `collector`,
  Comedian = `comedian`,
  Commissar = `comissar`,
  Conductor = `conductor`,
  Confessor = `confessor`,
  Conjurer = `conjurer`,
  Conman = `conman`,
  Conservationist = `conservationist`,
  Constable = `constable`,
  ConstructionWorker = `construction worker`,
  Contortionist = `contortionist`,
  Cook = `cook`,
  Cooper = `cooper`,
  Copyist = `copyist`,
  Costumer = `costumer`,
  Count = `count`,
  Courier = `courier`,
  Courtesan = `courtesan`,
  Courtier = `courtier`,
  Cowherd = `cowherd`,
  Craftsman = `craftsman`,
  CrimeBoss = `crime boss`,
  CrossingSweeper = `crossing sweeper`,
  Croupier = `croupier`,
  Cultist = `cultist`,
  CultLeader = `cult leader`,
  Curator = `curator`,
  Cutler = `cutler`,
  Cutpurse = `cutpurse`,
  Dairymaid = `dairymaid`,
  Dancer = `dancer`,
  Deacon = `deacon`,
  Dean = `dean`,
  DebtCollector = `debt collector`,
  Deserter = `deserter`,
  Diplomat = `diplomat`,
  DisgracedNoble = `disgraced noble`,
  Diver = `diver`,
  Diviner = `diviner`,
  DomesticPartner = `domestic partner`,
  Drakologist = `drakologist`,
  Draper = `draper`,
  DrugDealer = `drug dealer`,
  DrugLord = `drug lord`,
  Druid = `druid`,
  Drunkard = `drunkard`,
  Duelist = `duelist`,
  Duke = `duke`,
  DungeonDelver = `dungeon delver`,
  Dyer = `dyer`,
  Elder = `elder`,
  Elementalist = `elementalist`,
  Embroiderer = `embroiderer`,
  Emperor = `emperor`,
  Enchanter = `enchanter`,
  Engineer = `engineer`,
  Engraver = `engraver`,
  Entomologist = `entomologist`,
  Entrepeneur = `entrepeneur`,
  Equilibrist = `equilibrist`,
  Evoker = `evoker`,
  ExCriminal = `ex-criminal`,
  Executioner = `executioner`,
  Exile = `exile`,
  Exorcist = `exorcist`,
  Explorer = `explorer`,
  Exterminator = `exterminator`,
  Extortioner = `extortioner`,
  Falconer = `falconer`,
  Farmer = `farmer`,
  Farrier = `farrier`,
  FashionDesigner = `fashion designer`,
  Fence = `fence`,
  Ferryman = `ferryman`,
  Fifer = `fifer`,
  Fighter = `fighter`,
  Firefighter = `firefighter`,
  FirstMate = `first mate`,
  Fisherman = `fisherman`,
  Fishmonger = `fishmonger`,
  Fletcher = `fletcher`,
  Florist = `florist`,
  FolkHero = `folk hero`,
  FoodAndDrinkTaster = `food and drink tester`,
  Forager = `forager`,
  Forester = `forester`,
  Forger = `forger`,
  Fowler = `fowler`,
  Friar = `friar`,
  Fugitive = `fugitive`,
  FurnitureArtisan = `furniture artisan`,
  Furrier = `furrier`,
  Gambler = `gambler`,
  Gamefighter = `gamefighter`,
  Gamekeeper = `gamekeeper`,
  Gardener = `gardener`,
  General = `general`,
  GeneralContractor = `general contractor`,
  Gladiator = `gladiator`,
  Glasspainter = `glasspainter`,
  Glassworker = `glassworker`,
  Glazier = `glazier`,
  Glovemaker = `glovemaker`,
  Goldsmith = `goldsmith`,
  Gongfarmer = `gongfarmer`,
  Gravedigger = `gravedigger`,
  GraveRobber = `grave robber`,
  Grocer = `grocer`,
  Groom = `groom`,
  Groundskeeper = `groundskeeper`,
  Guard = `guard`,
  Guildmaster = `guildmaster`,
  Harlot = `harlot`,
  Hatter = `hatter`,
  Healer = `healer`,
  HearthWitch = `hearth witch`,
  Helmsman = `helmsman`,
  Herald = `herald`,
  Herbalist = `herbalist`,
  Herder = `herder`,
  Heretic = `heretic`,
  Hermit = `hermit`,
  HighPriest = `high priest`,
  Highwayman = `highwayman`,
  Historian = `historian`,
  Horologist = `horologist`,
  HorseTrainer = `horse trainer`,
  Housewife = `housewife`,
  Hunter = `hunter`,
  IceSeller = `ice seller`,
  Illusionist = `illusionist`,
  Innkeeper = `innkeeper`,
  Inquisitor = `inquisitor`,
  InspectionOfficer = `inspection officer`,
  InstrumentMaker = `instrument maker`,
  IntelligenceOfficer = `intelligence officer`,
  Interpreter = `interpreter`,
  Inventor = `inventor`,
  Investigator = `investigator`,
  Jailer = `jailer`,
  Jester = `jester`,
  Jeweler = `jeweler`,
  Judge = `judge`,
  Juggler = `juggler`,
  Kidnapper = `kidnapper`,
  King = `king`,
  KitchenDrudge = `kitchen drudge`,
  Knacker = `knacker`,
  Knight = `knight`,
  Lady = `lady`,
  LadyInWaiting = `lady-in-waiting`,
  Lamplighter = `lamplighter`,
  Lapidary = `lapidary`,
  LaundryWorker = `laundry worker`,
  Leatherworker = `leatherworker`,
  Lector = `lector`,
  Librarian = `librarian`,
  Lieutenant = `lieutenant`,
  Limner = `limner`,
  Linguist = `linguist`,
  LoanShark = `loan shark`,
  Locksmith = `locksmith`,
  Longshoreman = `longeshoreman`,
  Lord = `lord`,
  Lumberjack = `lumberjack`,
  Luthier = `luthier`,
  Mage = `mage`,
  MaidServant = `maid-servant`,
  MakeupArtist = `makeup artist`,
  Marauder = `marauder`,
  Marksman = `marksman`,
  Marquess = `marquess`,
  Marshall = `marshall`,
  Masseur = `masseur`,
  MasterOfCoin = `master-of-coin`,
  MasterOfHorses = `master-of-horses`,
  MasterOfHounds = `master-of-hounds`,
  MasterOfTheRevels = `master of the revels`,
  Mathematician = `mathematician`,
  Medic = `medic`,
  Medium = `medium`,
  Mercenary = `mercenary`,
  Mercer = `mercer`,
  Merchant = `merchant`,
  Messenger = `messenger`,
  Meteorologist = `meteorologist`,
  Midwife = `midwife`,
  Miller = `miller`,
  Miner = `miner`,
  Minister = `minister`,
  Minstrel = `minstrel`,
  Missionary = `missionary`,
  Model = `model`,
  Moneychanger = `moneychanger`,
  Moneylender = `moneylender`,
  Monk = `monk`,
  MonsterHandler = `MonsterHandler`,
  MonsterHunter = `monster hunter`,
  Mortician = `mortician`,
  Mountaineer = `mountaineer`,
  Musician = `musician`,
  Nanny = `nanny`,
  Navigator = `navigator`,
  Necromancer = `necromancer`,
  Noble = `noble`,
  Nobleman = `nobleman`,
  Notary = `notary`,
  Nun = `nun`,
  Nurse = `nurse`,
  Operator = `operator`,
  Optician = `optician`,
  Optometrist = `optometrist`,
  Orator = `orator`,
  Page = `page`,
  Painter = `painter`,
  Paladin = `paladin`,
  Pardoner = `pardoner`,
  PastryChef = `pastry chef`,
  Pathfinder = `pathfinder`,
  Patissier = `patissier`,
  Peasant = `peasant`,
  Peddler = `peddler`,
  Perfumer = `perfumer`,
  Philosopher = `philosopher`,
  Physician = `physician`,
  Pilgrim = `pilgrim`,
  Pimp = `pimp`,
  Pirate = `pirate`,
  PlantationOwner = `plantation owner`,
  Plasterer = `plasterer`,
  Playwright = `playwright`,
  Plumber = `plumber`,
  Plumer = `plumer`,
  Poacher = `poacher`,
  Poet = `poet`,
  Poisoner = `poisoner`,
  PoliticalDissident = `political dissident`,
  Politician = `politician`,
  Porter = `porter`,
  Potter = `potter`,
  Priest = `priest`,
  PrimeMinister = `prime minister`,
  Prince = `prince`,
  Printer = `printer`,
  Prisoner = `prisoner`,
  Privateer = `privateer`,
  Professor = `professor`,
  Prophet = `prophet`,
  Prospector = `prospector`,
  Purser = `purser`,
  Quarryman = `quarryman`,
  Quartermaster = `quartermaster`,
  RagAndBoneMan = `rag-and-bone man`,
  Ranger = `ranger`,
  Refugee = `refugee`,
  Renderer = `renderer`,
  Restorer = `restorer`,
  Ringmaster = `ringmaster`,
  Ritualist = `ritualist`,
  Roadlayer = `roadlayer`,
  Rogue = `rogue`,
  Roofer = `roofer`,
  Ropemaker = `ropemaker`,
  Ropewalker = `ropewalker`,
  RoyalGuard = `royal guard`,
  Rugmaker = `rugmaker`,
  RunawaySlave = `runaway slave`,
  Runecaster = `runecaster`,
  Runner = `runner`,
  Saddler = `saddler`,
  Sage = `sage`,
  Sailor = `sailor`,
  Sapper = `sapper`,
  Scavenger = `scavenger`,
  Scholar = `scholar`,
  Scout = `scout`,
  Scribe = `scribe`,
  Sculptor = `sculptor`,
  Seamstress = `seamstress`,
  Seer = `seer`,
  Senator = `senator`,
  Sergeant = `sergeant`,
  SergeantAtArms = `sergeant-at-arms`,
  Servant = `servant`,
  Sexton = `sexton`,
  Shaman = `shaman`,
  Shapeshifter = `shapeshifter`,
  Shepherd = `shepherd`,
  Sheriff = `sheriff`,
  ShipsCaptain = `ship's captain`,
  Shipwright = `shipwright`,
  Shoemaker = `shoemaker`,
  Shopkeep = `shopkeep`,
  ShopkeepsAssistant = `shopkeep's assistant`,
  SiegeArtillerist = `siege artillerist`,
  Silversmith = `silversmith`,
  Singer = `singer`,
  Skald = `skald`,
  Slave = `slave`,
  SlaveDriver = `slave driver`,
  Slaver = `slaver`,
  Smuggler = `smuggler`,
  Soaper = `soaper`,
  Soldier = `soldier`,
  Sorcerer = `sorcerer`,
  SpecialForceSoldier = `special force soldier`,
  Speculator = `speculator`,
  SpiceMerchant = `spice merchant`,
  Spy = `spy`,
  Spymaster = `spymaster`,
  Squatter = `squatter`,
  Squire = `squire`,
  Stablehand = `stablehand`,
  Stagehand = `stagehand`,
  StageMagician = `stage magician`,
  Stevedore = `stevedore`,
  Steward = `steward`,
  Stonemason = `stonemason`,
  StreetCleaner = `street cleaner`,
  StreetSeller = `street seller`,
  StreetSweeper = `street sweeper`,
  Student = `student`,
  Stuntman = `stuntman`,
  Summoner = `summoner`,
  Surgeon = `surgeon`,
  Surveyor = `surveyor`,
  Tactician = `tactician`,
  Tailor = `tailor`,
  TalentScout = `talent scout`,
  Tanner = `tanner`,
  Tattooist = `tattooist`,
  Tavernkeeper = `tavernkeeper`,
  TaxCollector = `tax collector`,
  Taxidermist = `taxidermist`,
  Teacher = `teacher`,
  Templar = `templar`,
  Thatcher = `thatcher`,
  TheaterDirector = `theater director`,
  Theologian = `theologian`,
  Thief = `thief`,
  Thresher = `thresher`,
  ThriftDealer = `thrift dealer`,
  Tinker = `tinker`,
  Tollkeeper = `tollkeeper`,
  Torturer = `torturer`,
  TownCrier = `town crier`,
  Toymaker = `toymaker`,
  Tradesman = `tradesman`,
  Trainer = `trainer`,
  Transmuter = `transmuter`,
  Trapezist = `trapezist`,
  Trapper = `trapper`,
  Tunner = `tunner`,
  Tutor = `tutor`,
  Urchin = `urchin`,
  Vagabond = `vagabond`,
  Vendor = `vendor`,
  Veterinarian = `veterinarian`,
  Viscount = `viscount`,
  Vitner = `vitner`,
  Wagoner = `wagoner`,
  WannabePirate = `wannabe pirate`,
  Ward = `ward`,
  Warden = `warden`,
  Warlock = `warlock`,
  Warmage = `warmage`,
  WaterBearer = `water bearer`,
  Weaponsmith = `weaponsmith`,
  Weaver = `weaver`,
  Wetnurse = `wetnurse`,
  Wheelwright = `wheelwright`,
  Witch = `witch`,
  Witchdoctor = `witchdoctor`,
  Wizard = `wizard`,
  Woodcarver = `woodcarver`,
  WoodSeller = `wood seller`,
  Wordsmith = `wordsmith`,
  Wrestler = `wrestler`,
  Writer = `writer`,
  Zookeeper = `zookeeper`,
  Zoologist = `zoologist`,
}

export const professions: Record<Profession, ProfessionData> = {
  [Profession.Child]: {
    sv: 10000,
    type: Type.Family,
    sector: Sector.Family,
    synonyms: [`prepubescent`, `kid`],
    description: `a child, specifically one that is not working.`,
    dailyWage: 4,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.DomesticPartner]: {
    sv: 10000,
    type: Type.Family,
    sector: Sector.Family,
    description: `a spouse that stays at home, cooking, cleaning, and caring for the family.`,
    dailyWage: 4,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Peasant]: {
    sv: 10000,
    type: Type.Labourer,
    sector: Sector.Agriculture,
    description: `a peasant.`,
    dailyWage: 14,
    socialClass: SocialClass.Peasantry,
    socialClassRoll() {
      return 30 + dice(8, 6)
    },
  },
  [Profession.Mountaineer]: {
    sv: 1500,
    isHobby: true,
    type: Type.Recreation,
    sector: Sector.Adventuring,
    description: `a person living in a mountainous area.`,
    dailyWage: 50,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Barbarian]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `a warrior who gets lost in the craze of battle.`,
    dailyWage: 200,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bard]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `uses their artistic talents to induce magical effects.`,
    dailyWage: 200,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cleric]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `has devoted their entire being to the will of their god, thus gaining magical powers.`,
    dailyWage: 180,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Druid]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.`,
    dailyWage: 140,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Fighter]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `a common warrior.`,
    dailyWage: 200,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Monk]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `a warrior of a holy order.`,
    dailyWage: 20,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Rogue]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `.`,
    dailyWage: 250,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Ranger]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `wanders or ranges over a particular area or domain.`,
    dailyWage: 150,
    socialClass: SocialClass.Commoner,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Paladin]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `a holy knight and divine spellcaster crusading in the name of their god.`,
    dailyWage: 100,
    socialClass: SocialClass.Nobility,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Sorcerer]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `magic user who derives their magical abilities innately rather than through study.`,
    dailyWage: 300,
    socialClass: SocialClass.Nobility,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Warlock]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `a mage who has gained their abilities by forming a pact with an otherworldly being.`,
    dailyWage: 300,
    socialClass: SocialClass.Nobility,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Wizard]: {
    sv: 6500,
    type: Type.DnDClass,
    sector: Sector.Adventuring,
    description: `derives their magical abilities through study.`,
    dailyWage: 300,
    socialClass: SocialClass.Nobility,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Actor]: {
    sv: 2500,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `impersonates characters, typically on stage in a theatrical production.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Advocate]: {
    sv: 3250,
    synonyms: [`lawyer`],
    type: `profession`,
    sector: `government and law`,
    description: `practices or studies law, typically an attorney or a counselor.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Advisor]: {
    sv: 780,
    type: `profession`,
    sector: `government and law`,
    description: `advises some sort of government official on a specific area of governing.`,
    dailyWage: 230,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.AnimalHandler]: {
    sv: 250,
    type: `labourer`,
    sector: `agriculture`,
    description: `works with different animals for a variety of tasks, typically livestock.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Apothecarist]: {
    sv: 450,
    type: `business`,
    sector: `science`,
    description: `prepares and sells medicines, drugs, and potions.`,
    dailyWage: 160,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Architect]: {
    sv: 550,
    type: `profession`,
    sector: `construction`,
    description: `designs buildings or landscapes and in many cases supervises their construction.`,
    dailyWage: 600,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Archivist]: {
    sv: 2450,
    type: `profession`,
    sector: `science`,
    description: `maintains and is in charge of some sort archives.`,
    dailyWage: 300,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Armorer]: {
    sv: 750,
    type: `business`,
    sector: `craftsmanship`,
    description: `specializes in making and repairing armor.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Astrologer]: {
    sv: 950,
    isHobby: true,
    type: `profession`,
    sector: `science`,
    description: `uses astrology to tell others about their character or to predict their future.`,
    dailyWage: 450,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Baker]: {
    sv: 800,
    type: `business`,
    sector: `hospitality`,
    description: `makes all sorts of baked goods.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Banker]: {
    sv: 2250,
    type: `business`,
    sector: `business`,
    description: `an officer or owner of a bank or group of banks.`,
    dailyWage: 800,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Barber]: {
    sv: 350,
    type: `business`,
    sector: `hospitality`,
    description: `cuts hair and shaves or trims beards.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bartender]: {
    sv: 450,
    synonyms: [`barkeep`, `tavern owner`, `innkeep`],
    type: `business`,
    sector: `hospitality`,
    description: `pours drinks at taverns and other establishments.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Barmaid]: {
    sv: 450,
    synonyms: [`waiter`, `waitress`],
    type: `business`,
    sector: `hospitality`,
    description: `serves drinks and food in a bar as well as engaging with customers.`,
    dailyWage: 60,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Blacksmith]: {
    sv: 750,
    type: `business`,
    sector: `craftsmanship`,
    description: `forges and repairs things in metal, including weapons, armor, utensils, etc.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.BlacksmithsAssistant]: {
    sv: 800,
    synonyms: [`smith apprentice`, `smithy apprentice`],
    type: `labourer`,
    sector: `craftsmanship`,
    description: `serves under a blacksmith learning the trade of forging.`,
    dailyWage: 50,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bookseller]: {
    sv: 6300,
    type: `business`,
    sector: `business`,
    description: `sells books from a shop or cart.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Brewer]: {
    sv: 550,
    isHobby: true,
    type: `business`,
    sector: `craftsmanship`,
    description: `brews ale.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Brickmason]: {
    sv: 650,
    type: `labourer`,
    sector: `construction`,
    description: `builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.`,
    dailyWage: 70,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Pimp]: {
    sv: 850,
    synonyms: [`whoremonger`],
    type: `business`,
    sector: `business`,
    description: `controls prostitutes and arranges clients for them, taking part of their earnings in return.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Buccaneer]: {
    sv: 1350,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `a kind of privateer or free sailor.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Butcher]: {
    sv: 1150,
    type: `business`,
    sector: `hospitality`,
    description: `cuts up and sells meat.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Captain]: {
    sv: 550,
    type: `profession`,
    sector: `military`,
    description: `an army officer of high rank in charge of commanding squadrons of soldiers.`,
    dailyWage: 160,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Caravanner]: {
    sv: 1450,
    type: `labourer`,
    sector: `transportation`,
    description: `travels or lives in a caravan.`,
    dailyWage: 50,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Carpenter]: {
    sv: 550,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes and repairs wooden objects and structures.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cartographer]: {
    sv: 1950,
    type: `profession`,
    sector: `science`,
    description: `a scholar and illustrator of maps.`,
    dailyWage: 240,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Chandler]: {
    sv: 700,
    type: `business`,
    sector: `business`,
    description: `deals in provisions and supplies.`,
    dailyWage: 90,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Chef]: {
    sv: 1850,
    type: `labourer`,
    sector: `hospitality`,
    description: `a professional cook trained in the culinary arts.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Clergyman]: {
    sv: 40,
    type: `profession`,
    sector: `religion`,
    description: `a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.`,
    dailyWage: 190,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.ClockMaker]: {
    sv: 4550,
    isHobby: true,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs clocks.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Craftsman]: {
    sv: 4550,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs things.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cobbler]: {
    sv: 1550,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs footwear.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Cook]: {
    sv: 450,
    type: `labourer`,
    sector: `hospitality`,
    description: `prepares food for eating.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Cooper]: {
    sv: 700,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `makes and repairs casks and barrels.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Courtesan]: {
    sv: 1950,
    type: ``,
    sector: `hospitality`,
    description: `a prostitute with wealthy and noble clients.`,
    dailyWage: 220,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Courtier]: {
    sv: 1950,
    type: `profession`,
    sector: `government and law`,
    description: `attends court as a companion or adviser to the king or queen.`,
    dailyWage: 320,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cowherd]: {
    sv: 250,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `supervises grazing cattle.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Dancer]: {
    sv: 2250,
    type: `profession`,
    sector: `arts`,
    description: `moves their body rhythmically with or without musical accompaniment.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Diplomat]: {
    sv: 3450,
    type: `profession`,
    sector: `government and law`,
    description: `an official representing a country abroad.`,
    dailyWage: 440,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Diver]: {
    sv: 3250,
    type: `labourer`,
    sector: `agriculture`,
    description: `dives down deep to collect precious things from the sea floors.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Farmer]: {
    sv: 150,
    type: `labourer`,
    sector: `agriculture`,
    description: `operates a farm or cultivates land.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Fisherman]: {
    sv: 170,
    type: `labourer`,
    sector: `agriculture`,
    description: `catches fish.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Fishmonger]: {
    sv: 250,
    type: `business`,
    sector: `business`,
    description: `sells fish.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Furrier]: {
    sv: 250,
    type: `business`,
    sector: `craftsmanship`,
    description: `prepares furs for adornment.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Gardener]: {
    sv: 550,
    type: `labourer`,
    sector: `agriculture`,
    description: `tends and cultivates a garden.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.General]: {
    sv: 2250,
    type: `profession`,
    sector: `military`,
    description: `the chief commander of an army.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Gladiator]: {
    sv: 3250,
    type: `profession`,
    sector: `arts`,
    description: `fights against other people, wild animals, or monsters in an arena.`,
    dailyWage: 210,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Glovemaker]: {
    sv: 2400,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes and repairs gloves.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Goldsmith]: {
    sv: 6550,
    type: `business`,
    sector: `craftsmanship`,
    description: `a smith who specializes in precious metals.`,
    dailyWage: 400,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Grocer]: {
    sv: 450,
    type: `business`,
    sector: `business`,
    description: `a food merchant.`,
    dailyWage: 105,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Guard]: {
    sv: 150,
    synonyms: [`guardsman`, `guard`, `watchman`, `town guard`],
    type: `profession`,
    sector: `military`,
    description: `a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Guildmaster]: {
    sv: 4150,
    type: `profession`,
    sector: `business`,
    description: `leads an economically independent producer (a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).`,
    dailyWage: 900,
    socialClass: `nobility`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Hatter]: {
    sv: 950,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes and repairs headwear.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Healer]: {
    sv: 950,
    type: `profession`,
    sector: `magic`,
    description: `able to cure a disease or injury using magic.`,
    dailyWage: 170,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Herald]: {
    sv: 550,
    type: `labourer`,
    sector: `communications`,
    description: `a messenger who carries important news..`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Herbalist]: {
    sv: 850,
    type: `business`,
    sector: `science`,
    description: `practices healing by the use of herbs.`,
    dailyWage: 130,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Hermit]: {
    sv: 950,
    type: `profession`,
    sector: `outcast`,
    description: `lives in solitude, typically as a religious or spiritual discipline.`,
    dailyWage: 40,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Historian]: {
    sv: 4150,
    type: `profession`,
    sector: `science`,
    description: `an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.`,
    dailyWage: 230,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Hunter]: {
    sv: 250,
    isHobby: true,
    type: `labourer`,
    sector: `self employed`,
    description: `hunts game or other wild animals.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.IceSeller]: {
    sv: 1950,
    type: `labourer`,
    sector: `agriculture`,
    description: `collects and sells ice.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Innkeeper]: {
    sv: 750,
    synonyms: [`tavern keeper`, `tavernkeep`, `barkeep`, `innkeep`],
    type: `business`,
    sector: `business`,
    description: `owns and runs an inn.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Inventor]: {
    sv: 2250,
    type: `profession`,
    sector: `business`,
    description: `invented a particular process or device, or invents things as an occupation.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Jailer]: {
    sv: 1250,
    type: `labourer`,
    sector: `military`,
    description: `supervises a jail and the prisoners in it.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Jester]: {
    sv: 2250,
    type: `profession`,
    sector: `arts`,
    description: `professional joker.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Jeweler]: {
    sv: 400,
    type: `business`,
    sector: `craftsmanship`,
    description: `designs, makes, and repairs necklaces, bracelets, rings, etc., often containing jewels.`,
    dailyWage: 240,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Judge]: {
    sv: 850,
    type: `profession`,
    sector: `government and law`,
    description: `decides cases in a court of law.`,
    dailyWage: 650,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Knight]: {
    sv: 1150,
    type: `profession`,
    sector: `government and law`,
    description: `serves his or her sovereign after being bestowed a rank of royal honor.`,
    dailyWage: 350,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Lady]: {
    sv: 1550,
    type: `profession`,
    sector: `government and law`,
    description: `some sort of noble.`,
    dailyWage: 350,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Leatherworker]: {
    sv: 750,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes items from leather such as pouches, scabbards, straps, etc.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Librarian]: {
    sv: 3150,
    type: `profession`,
    sector: `science`,
    description: `administers or assists in a library.`,
    dailyWage: 160,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Linguist]: {
    sv: 5150,
    type: `profession`,
    sector: `science`,
    description: `studies the essence of communication, including the units, nature, structure, and modification of language.`,
    dailyWage: 260,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Locksmith]: {
    sv: 1900,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes and repairs locks.`,
    dailyWage: 130,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Lord]: {
    sv: 1150,
    type: `profession`,
    sector: `government and law`,
    description: `some sort of noble.`,
    dailyWage: 400,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Lumberjack]: {
    sv: 350,
    type: `labourer`,
    sector: `agriculture`,
    description: `fells trees, cuts them into logs, and transports them to a sawmill.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.MaidServant]: {
    sv: 250,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `a domestic servant of a household.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Masseur]: {
    sv: 1550,
    type: `profession`,
    sector: `business`,
    description: `performs massages.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Merchant]: {
    sv: 650,
    type: `business`,
    sector: `business`,
    description: `sells and trades goods.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Messenger]: {
    sv: 1250,
    type: `labourer`,
    sector: `communications`,
    description: `carries messages between recipients.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Midwife]: {
    sv: 650,
    type: `labourer`,
    sector: `science`,
    description: `assists in childbirth and the care of women giving birth.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Miller]: {
    sv: 650,
    type: `business`,
    sector: `agriculture`,
    description: `owns or works in a grain mill.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Miner]: {
    sv: 550,
    type: `labourer`,
    sector: `agriculture`,
    description: `works underground in mines in order to obtain minerals such as coal, diamonds, or gold.`,
    dailyWage: 60,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Minister]: {
    sv: 950,
    type: `profession`,
    sector: `government and law`,
    description: `assists with the administration of business.`,
    dailyWage: 190,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Minstrel]: {
    sv: 1450,
    type: `profession`,
    sector: `arts`,
    description: `recites lyric or heroic poetry for nobility.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Friar]: {
    sv: 1450,
    type: `profession`,
    sector: `religion`,
    description: `a member of a religious community of men, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.`,
    dailyWage: 30,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Mortician]: {
    sv: 650,
    type: `profession`,
    sector: `science`,
    description: `prepares dead bodies for burial or cremation and makes arrangements for funerals.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Necromancer]: {
    sv: 6150,
    type: `profession`,
    sector: `magic`,
    description: `communicates with and conjures the spirits of the dead.`,
    dailyWage: 300,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Noble]: {
    sv: 3150,
    synonyms: [`nobleman`, `noblewoman`],
    type: `profession`,
    sector: `government and law`,
    description: `a person belonging to a class with high social or political status.`,
    dailyWage: 300,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Nobleman]: {
    sv: 3150,
    synonyms: [`nobleman`, `noblewoman`],
    type: `profession`,
    sector: `government and law`,
    description: `a person belonging to a class with high social or political status.`,
    dailyWage: 300,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Nun]: {
    sv: 2150,
    type: `profession`,
    sector: `religion`,
    description: `a member of a religious community of women, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Nurse]: {
    sv: 1150,
    type: `profession`,
    sector: `science`,
    description: `cares for the sick or infirm, especially in a hospital.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Painter]: {
    sv: 1500,
    isHobby: true,
    type: `business`,
    sector: `arts`,
    description: `paints pictures using a variety of different substances.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Patissier]: {
    sv: 1500,
    type: `business`,
    sector: `hospitality`,
    description: `maker or seller of pastries and cakes.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Perfumer]: {
    sv: 3150,
    type: `business`,
    sector: `craftsmanship`,
    description: `expert on creating perfume compositions.`,
    dailyWage: 160,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Philosopher]: {
    sv: 7150,
    type: `profession`,
    sector: `science`,
    description: `a scholar of the fundamental nature of knowledge, reality, and existence.`,
    dailyWage: 150,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Physician]: {
    sv: 4150,
    type: `profession`,
    sector: `science`,
    description: `a qualified practitioner of medicine.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Pilgrim]: {
    sv: 5150,
    type: `labourer`,
    sector: `outcast`,
    description: `journeys to some sacred place as an act of religious devotion, occasionally to settle there.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Politician]: {
    sv: 4000,
    type: `profession`,
    sector: `government and law`,
    description: `holding or seeking office in government.`,
    dailyWage: 800,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.PrimeMinister]: {
    sv: 4000,
    synonyms: [`governor`],
    type: `profession`,
    sector: `government and law`,
    description: `democratically holds the highest position of office.`,
    dailyWage: 800,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Potter]: {
    sv: 1150,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes pots, bowls, plates, etc., out of clay.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Priest]: {
    sv: 750,
    type: `profession`,
    sector: `religion`,
    description: `has the authority to perform certain rites and administer certain sacraments.`,
    dailyWage: 190,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Privateer]: {
    sv: 1150,
    type: `labourer`,
    sector: `military`,
    description: `engages in maritime warfare under a commission of war.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Professor]: {
    sv: 3150,
    type: `profession`,
    sector: `science`,
    description: `a teacher of the highest rank in a college or university.`,
    dailyWage: 350,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Roofer]: {
    sv: 1800,
    type: `labourer`,
    sector: `construction`,
    description: `builds and repairs roofs.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Ropemaker]: {
    sv: 1850,
    type: `business`,
    sector: `craftsmanship`,
    description: `braids rope.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Rugmaker]: {
    sv: 1850,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes and repairs rugs by braiding, hooking, weaving, etc.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Saddler]: {
    sv: 1000,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes and repairs saddlery.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Sailor]: {
    sv: 150,
    type: `labourer`,
    sector: `transportation`,
    description: `works as a member of the crew of a commercial or naval ship or boat.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Sculptor]: {
    sv: 250,
    type: `business`,
    sector: `arts`,
    description: `crafts art by carving or casting blocks of marble, stones, or other hardened minerals.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Scavenger]: {
    sv: 350,
    type: `labourer`,
    sector: `unemployed`,
    description: `searches for and collects discarded items.`,
    dailyWage: 30,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Scholar]: {
    sv: 2250,
    type: `profession`,
    sector: `science`,
    description: `a specialist in a particular branch of study who pursues the acquisition of knowledge.`,
    dailyWage: 180,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Seamstress]: {
    sv: 450,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `makes, alters, repairs, as well as occasionally designing garments.`,
    dailyWage: 190,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Seer]: {
    sv: 350,
    type: `profession`,
    sector: `magic`,
    description: `able to see what the future holds through supernatural insight.`,
    dailyWage: 400,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Servant]: {
    sv: 350,
    type: `labourer`,
    sector: `hospitality`,
    description: `performs duties for others, especially a person employed in a house or as a personal attendant.`,
    dailyWage: 100,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Shaman]: {
    sv: 750,
    type: `profession`,
    sector: `magic`,
    description: `accesses and influences the world of good and evil spirits.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Shepherd]: {
    sv: 150,
    type: `labourer`,
    sector: `agriculture`,
    description: `herds, tends, and guards sheep.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.ShipsCaptain]: {
    sv: 950,
    type: `profession`,
    sector: `military`,
    description: `commands a ship.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Shoemaker]: {
    sv: 150,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes shoes out of different materials.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Silversmith]: {
    sv: 1250,
    type: `business`,
    sector: `craftsmanship`,
    description: `a smith who specializes in precious metals.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Slave]: {
    sv: 150,
    type: `labourer`,
    sector: `outcast`,
    description: `a person who is the legal property of another and forced to obey them.`,
    dailyWage: 0,
    socialClass: `indentured servitude`,
    socialClassRoll() {
      return 5
    },
  },
  [Profession.Slaver]: {
    sv: 650,
    type: `business`,
    sector: `business`,
    description: `deals with or owns slaves.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Soldier]: {
    sv: 1000,
    type: `profession`,
    sector: `military`,
    description: `serves in an army.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.SpiceMerchant]: {
    sv: 1500,
    type: `business`,
    sector: `business`,
    description: `sells different kinds of spices.`,
    dailyWage: 250,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Squire]: {
    sv: 950,
    type: `profession`,
    sector: `military`,
    description: `acts as an attendant to a knight before attempting to become a knight themselves.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Stablehand]: {
    sv: 550,
    type: `labourer`,
    sector: `agriculture`,
    description: `works in a stable.`,
    dailyWage: 80,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Stevedore]: {
    sv: 550,
    synonyms: [`ship worker`, `dock worker`],
    type: `labourer`,
    sector: `labour`,
    description: `loads and unloads cargo from ships.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Stonemason]: {
    sv: 750,
    type: `business`,
    sector: `construction`,
    description: `cuts and prepares stone for use in construction.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Steward]: {
    sv: 950,
    type: `profession`,
    sector: `government and law`,
    description: `supervises both the estate and household of his lord or lady while they are away.`,
    dailyWage: 250,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.StreetSeller]: {
    sv: 550,
    type: `business`,
    sector: `business`,
    description: `hocks goods on the street.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.StreetSweeper]: {
    sv: 450,
    type: `labourer`,
    sector: `labour`,
    description: `cleans streets of a town.`,
    dailyWage: 60,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Student]: {
    sv: 3150,
    type: `profession`,
    sector: `science`,
    description: `attends school or learns under other to enter and pursue a particular subject.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Surgeon]: {
    sv: 4150,
    type: `profession`,
    sector: `science`,
    description: `practices surgery.`,
    dailyWage: 380,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Surveyor]: {
    sv: 1150,
    type: `profession`,
    sector: `business`,
    description: `establishes maps and boundaries for ownership or other purposes required by government or civil law.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tailor]: {
    sv: 250,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes, alters, repairs, as well as occasionally designing garments.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tanner]: {
    sv: 200,
    type: `business`,
    sector: `craftsmanship`,
    description: `treats the skins and hides of animals to produce leather.`,
    dailyWage: 70,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Tavernkeeper]: {
    sv: 450,
    type: `business`,
    sector: `business`,
    description: `owns or runs a tavern.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Shopkeep]: {
    sv: 450,
    type: `business`,
    sector: `business`,
    description: `owns or runs a shop.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.ShopkeepsAssistant]: {
    sv: 200,
    type: `business`,
    sector: `business`,
    description: `runs or assists in running a shop.`,
    dailyWage: 25,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.TaxCollector]: {
    sv: 1850,
    type: `profession`,
    sector: `government and law`,
    description: `collects unpaid taxes from people, guilds, or businesses.`,
    dailyWage: 250,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Teacher]: {
    sv: 1450,
    type: `profession`,
    sector: `science`,
    description: `instructs on a particular skill or subject.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Thatcher]: {
    sv: 350,
    type: `labourer`,
    sector: `construction`,
    description: `builds and repairs roofs.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Thief]: {
    sv: 850,
    type: `profession`,
    sector: `crime`,
    description: `steals peoples property, especially by stealth and without using force or violence.`,
    dailyWage: 120,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Torturer]: {
    sv: 1850,
    type: `profession`,
    sector: `military`,
    description: `inflicts severe pain on someone as a punishment or in order to force them to do or say something.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.TownCrier]: {
    sv: 750,
    type: `labourer`,
    sector: `communications`,
    description: `makes public announcements in the streets or marketplace.`,
    dailyWage: 60,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Toymaker]: {
    sv: 2500,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs toys.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Vendor]: {
    sv: 1150,
    type: `business`,
    sector: `business`,
    description: `deals items in the street.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Veterinarian]: {
    sv: 1250,
    type: `profession`,
    sector: `agriculture`,
    description: `treats diseased or injured animals.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Vitner]: {
    sv: 850,
    type: `profession`,
    sector: `agriculture`,
    description: `engages in winemaking, especially with monitoring and harvesting the grapes.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Weaver]: {
    sv: 600,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `makes fabric by weaving fiber together.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Wetnurse]: {
    sv: 350,
    type: `labourer`,
    sector: `labour`,
    description: `a woman employed to suckle another woman's child.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Woodcarver]: {
    sv: 2450,
    type: `business`,
    sector: `craftsmanship`,
    description: `fashions wood into various shapes.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.WoodSeller]: {
    sv: 2150,
    type: `business`,
    sector: `business`,
    description: `sells wood, typically logs.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Wrestler]: {
    sv: 6150,
    isHobby: true,
    type: `labourer`,
    sector: `arts`,
    description: `performs in matches involving grappling and grappling-type techniques.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Writer]: {
    sv: 7150,
    type: `profession`,
    sector: `arts`,
    description: `commits his or her thoughts, ideas, etc., into written language.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.MonsterHandler]: {
    sv: 5000,
    type: `profession`,
    sector: `agriculture`,
    description: `responsible for the safe keeping, dietary care, and exercise of monsters.`,
    dailyWage: 90,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Arborist]: {
    sv: 1000,
    type: `profession`,
    sector: `agriculture`,
    description: `maintains and cares for trees, often by surgically removing dying limbs.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Baler]: {
    sv: 800,
    type: `profession`,
    sector: `agriculture`,
    description: `bales hay, or in the mills, wool and cotton goods.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Beekeeper]: {
    sv: 2000,
    type: `profession`,
    sector: `agriculture`,
    description: `owns and breeds bees, especially for their honey.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Breeder]: {
    sv: 1000,
    type: `profession`,
    sector: `agriculture`,
    description: `breeds livestock, animals, or monsters.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Dairymaid]: {
    sv: 500,
    type: `profession`,
    sector: `agriculture`,
    description: `milks cows and makes cheese and butter.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Falconer]: {
    sv: 4000,
    type: `profession`,
    sector: `agriculture`,
    description: `keeps, trains, and hunts with falcons, hawks, or other birds of prey.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Florist]: {
    sv: 3500,
    isHobby: true,
    type: `business`,
    sector: `agriculture`,
    description: `grows and arranges plants and cut flowers.`,
    dailyWage: 130,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Forager]: {
    sv: 500,
    type: `profession`,
    sector: `agriculture`,
    description: `searches for food in the wild.`,
    dailyWage: 20,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Forester]: {
    sv: 1000,
    type: `labourer`,
    sector: `agriculture`,
    description: `supervises the wellbeing of a forest.`,
    dailyWage: 240,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Fowler]: {
    sv: 750,
    type: `profession`,
    sector: `agriculture`,
    description: `catches or ensnares birds.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Gamekeeper]: {
    sv: 4500,
    type: `profession`,
    sector: `agriculture`,
    description: `breeds and protects game, typically for a large estate.`,
    dailyWage: 230,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Groom]: {
    sv: 2500,
    type: `profession`,
    sector: `agriculture`,
    description: `cleans and brushes the coats horses, dogs, or other animals.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Herder]: {
    sv: 100,
    type: `profession`,
    sector: `agriculture`,
    description: `supervises a herd of livestock or makes a living from keeping livestock, especially in open country.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.HorseTrainer]: {
    sv: 1000,
    type: `profession`,
    sector: `agriculture`,
    description: `tends to horses and teaches them different disciplines.`,
    dailyWage: 210,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.MasterOfHorses]: {
    sv: 5000,
    type: `profession`,
    sector: `agriculture`,
    description: `supervises and commands all horses under a jurisdiction.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.MasterOfHounds]: {
    sv: 7500,
    type: `profession`,
    sector: `agriculture`,
    description: `maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.`,
    dailyWage: 900,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Pathfinder]: {
    sv: 1000,
    type: `profession`,
    sector: `agriculture`,
    description: `scouts ahead and discovers a path or way for others.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Plumer]: {
    sv: 2000,
    type: `profession`,
    sector: `agriculture`,
    description: `hunts birds for their plumes.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Prospector]: {
    sv: 500,
    type: `labourer`,
    sector: `mining`,
    description: `searches for mineral deposits, especially by drilling and excavation.`,
    dailyWage: 80,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Renderer]: {
    sv: 3500,
    type: `profession`,
    sector: `agriculture`,
    description: `converts waste animal tissue into usable materials.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Thresher]: {
    sv: 300,
    type: `labourer`,
    sector: `agriculture`,
    description: `separates grain from the plants by beating.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Trapper]: {
    sv: 800,
    type: `profession`,
    sector: `agriculture`,
    description: `traps wild animals, especially for their fur.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Zookeeper]: {
    sv: 10000,
    type: `profession`,
    sector: `agriculture`,
    description: `maintains and cares for animals or monsters in a zoo.`,
    dailyWage: 180,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.ConstructionWorker]: {
    sv: 300,
    type: `labourer`,
    sector: `construction`,
    description: `a laborer in the physical construction of a built environment and its infrastructure.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.GeneralContractor]: {
    sv: 5000,
    type: `profession`,
    sector: `construction`,
    description: `supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Glazier]: {
    sv: 500,
    type: `labourer`,
    sector: `construction`,
    description: `fits glass into windows and doors.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Plasterer]: {
    sv: 750,
    type: `labourer`,
    sector: `construction`,
    description: `applies plaster to walls, ceilings, or other surfaces.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Roadlayer]: {
    sv: 3000,
    synonyms: [`streetlayer`, `street layer`],
    type: `labourer`,
    sector: `construction`,
    description: `paves roads or streets.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Acrobat]: {
    sv: 2500,
    type: `profession`,
    sector: `arts`,
    description: `performs spectacular gymnastic feats.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Trapezist]: {
    sv: 3500,
    type: `profession`,
    sector: `arts`,
    description: `performs acrobatics high above the ground on a tightrope or trapeze.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Arranger]: {
    sv: 2000,
    type: `profession`,
    sector: `arts`,
    description: `adapts a musical composition for performance.`,
    dailyWage: 130,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Athlete]: {
    sv: 500,
    type: `profession`,
    sector: `labourer`,
    description: `proficient in sports and other forms of physical exercise.`,
    dailyWage: 130,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Busker]: {
    sv: 2000,
    type: `profession`,
    sector: `outcast`,
    description: `performs in a public place, often for money.`,
    dailyWage: 50,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Celebrity]: {
    sv: 10000,
    type: `profession`,
    sector: `arts`,
    description: `a famous person.`,
    dailyWage: 1000,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Choirmaster]: {
    sv: 1000,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `trains a choir and orchestrates their singing when they perform.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Clown]: {
    sv: 3000,
    type: `profession`,
    sector: `arts`,
    description: `comic entertainer who wears a traditional costume and exaggerated makeup.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Comedian]: {
    sv: 5000,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `entertainer whose act is designed to make an audience laugh.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Conductor]: {
    sv: 8000,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `directs the performance of an orchestra.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Contortionist]: {
    sv: 5000,
    type: `profession`,
    sector: `arts`,
    description: `twists and bends their body into strange and unnatural positions.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Curator]: {
    sv: 2500,
    isHobby: true,
    type: `business`,
    sector: `arts`,
    description: `keeper and custodian of a museum or other collections of precious items.`,
    dailyWage: 180,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Costumer]: {
    sv: 3500,
    type: `profession`,
    sector: `arts`,
    description: `makes theatrical costumes.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Equilibrist]: {
    sv: 3000,
    type: `profession`,
    sector: `arts`,
    description: `performs balancing feats.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.FashionDesigner]: {
    sv: 5000,
    isHobby: true,
    type: `business`,
    sector: `arts`,
    description: `applies design, aesthetics and natural beauty to garments and their accessories.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Glasspainter]: {
    sv: 5000,
    type: `profession`,
    sector: `arts`,
    description: `produces colorful designs on or in glass.`,
    dailyWage: 160,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Juggler]: {
    sv: 3000,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `keeps several objects in motion in the air at the same time by alternately tossing and catching them.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Limner]: {
    sv: 7000,
    type: `profession`,
    sector: `arts`,
    description: `paints and calligraphs to adorn or enlighten scrolls and manuscripts.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.MakeupArtist]: {
    sv: 4500,
    type: `profession`,
    sector: `arts`,
    description: `applies cosmetics to models, actors, nobles, etc.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Artisan]: {
    sv: 4500,
    isHobby: true,
    synonyms: [`artist`, `art maker`],
    type: `profession`,
    sector: `arts`,
    description: `creates some form of art.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 40 + dice(8, 6)
    },
  },
  [Profession.Model]: {
    sv: 3500,
    type: `profession`,
    sector: `arts`,
    description: `poses as a subject for an artist, fashion designer, or sculptor.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Musician]: {
    sv: 800,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `plays a musical instrument.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Playwright]: {
    sv: 2500,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `writes plays or musicals.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Poet]: {
    sv: 3500,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `writes ballads, epics, sonnets, or other forms of poetry.`,
    dailyWage: 110,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Ringmaster]: {
    sv: 3500,
    type: `business`,
    sector: `arts`,
    description: `master of ceremony who introduces the circus acts to the audience.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Ropewalker]: {
    sv: 4000,
    synonyms: [`trapeze artist`],
    type: `profession`,
    sector: `arts`,
    description: `walks along a tightrope to entertain others.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Singer]: {
    sv: 2000,
    type: `profession`,
    sector: `arts`,
    description: `sings with or without instrumental accompaniment.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Skald]: {
    sv: 5000,
    type: `profession`,
    sector: `arts`,
    description: `composes and recites poems honoring heroes and their deeds.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.StageMagician]: {
    sv: 3500,
    type: `profession`,
    sector: `arts`,
    description: `deceives their audience with seemingly impossible feats while using only natural means.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Stuntman]: {
    sv: 5000,
    type: `profession`,
    sector: `arts`,
    description: `performs dangerous stunts for their audience.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tattooist]: {
    sv: 3000,
    type: `business`,
    sector: `arts`,
    description: `illustrates the skin with indelible patterns, pictures, legends, etc.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.TheaterDirector]: {
    sv: 5000,
    type: `business`,
    sector: `arts`,
    description: `supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Accountant]: {
    sv: 3000,
    type: `business`,
    sector: `business`,
    description: `keeps and inspects financial accounts.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Actuary]: {
    sv: 6000,
    type: `business`,
    sector: `government and law`,
    description: `compiles and analyzes statistics and uses them to calculate risk.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.AnimalCollector]: {
    sv: 10000,
    isHobby: true,
    type: `business`,
    sector: `agriculture`,
    description: `collects and deals in rare and exotic animals and monsters.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.BusinessOwner]: {
    sv: 500,
    type: `business`,
    sector: `business`,
    description: `owns a business entity in an attempt to profit from its successful operations.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.DebtCollector]: {
    sv: 3500,
    type: `business`,
    sector: `business`,
    description: `recovers money owed on delinquent accounts.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Draper]: {
    sv: 2500,
    type: `business`,
    sector: `business`,
    description: `an alcohol merchant.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Appraiser]: {
    sv: 5000,
    type: `profession`,
    sector: `business`,
    description: `assesses the monetary value of something.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Auctioneer]: {
    sv: 4500,
    type: `profession`,
    sector: `business`,
    description: `conducts auctions by accepting bids and declaring goods sold.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bagniokeeper]: {
    sv: 1500,
    type: `business`,
    sector: `business`,
    description: `owner of a bath house or brothel.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bookkeeper]: {
    sv: 2500,
    type: `business`,
    sector: `business`,
    description: `keeps records of financial affairs.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Collector]: {
    sv: 3000,
    isHobby: true,
    type: `business`,
    sector: `business`,
    description: `collects things of a specified type, professionally or as a hobby.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Entrepeneur]: {
    sv: 500,
    isHobby: true,
    type: `business`,
    sector: `business`,
    description: `organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Moneychanger]: {
    sv: 2500,
    type: `business`,
    sector: `government and law`,
    description: `exchanges one currency for another.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Moneylender]: {
    sv: 1500,
    type: `business`,
    sector: `business`,
    description: `lends money to others who pay interest.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Peddler]: {
    sv: 350,
    type: `business`,
    sector: `business`,
    description: `travels from place to place selling assorted items.`,
    dailyWage: 80,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.PlantationOwner]: {
    sv: 1500,
    type: `business`,
    sector: `business`,
    description: `an owner of an estate on which crops are cultivated by resident labor, typically slave labor.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Speculator]: {
    sv: 9000,
    isHobby: true,
    type: `profession`,
    sector: `business`,
    description: `invests in stocks, property, or other ventures in the hope of making a profit.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.ThriftDealer]: {
    sv: 800,
    type: `business`,
    sector: `business`,
    description: `deals in secondhand items.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tradesman]: {
    sv: 500,
    type: `business`,
    sector: `business`,
    description: `deals exclusively in bartering.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.BillboardPoster]: {
    sv: 1000,
    type: `labourer`,
    sector: `business`,
    description: `a person who puts up notices, signs and advertisements.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Courier]: {
    sv: 300,
    type: `labourer`,
    sector: `business`,
    description: `transports packages and documents.`,
    dailyWage: 50,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Interpreter]: {
    sv: 5000,
    synonyms: [`translator`],
    type: `profession`,
    sector: `business`,
    description: `interprets language and its meaning, especially within ancient manuscripts.`,
    dailyWage: 190,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Coinsmith]: {
    sv: 10000,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes currency for the government.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bladesmith]: {
    sv: 3000,
    type: `business`,
    sector: `craftsmanship`,
    description: `specializes in making and repairing bladed weapons, especially swords and daggers.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bookbinder]: {
    sv: 5000,
    type: `business`,
    sector: `craftsmanship`,
    description: `binds books and wraps scrolls.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bottler]: {
    sv: 3000,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `bottles drinks and other liquids.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bowyer]: {
    sv: 500,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes bows and crossbows.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.BroomMaker]: {
    sv: 4500,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes brooms and brushes.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Candlemaker]: {
    sv: 2000,
    type: `business`,
    sector: `craftsmanship`,
    description: `makes candles and wax from honey and tallow.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Cartwright]: {
    sv: 500,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `makes and repairs carts and wagons.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Cutler]: {
    sv: 7500,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes cutlery.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Dyer]: {
    sv: 5000,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `dyes cloth and other materials.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Embroiderer]: {
    sv: 2500,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `ornaments with needlework.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Engraver]: {
    sv: 1000,
    type: `profession`,
    sector: `craftsmanship`,
    description: `incises a design onto a hard surface by cutting grooves into it.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Farrier]: {
    sv: 2000,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `trims and shoes horse's hooves.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Fletcher]: {
    sv: 1500,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs arrows.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.FurnitureArtisan]: {
    sv: 2500,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs furniture.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Glassworker]: {
    sv: 5000,
    type: `profession`,
    sector: `craftsmanship`,
    description: `blows glass planes and items.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.InstrumentMaker]: {
    sv: 7500,
    isHobby: true,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs musical instruments.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Lapidary]: {
    sv: 5000,
    isHobby: true,
    type: `profession`,
    sector: `craftsmanship`,
    description: `turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Luthier]: {
    sv: 8500,
    isHobby: true,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs stringed instruments.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Mercer]: {
    sv: 2500,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `weaves textile fabrics, especially silks, velvets, and other fine materials.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Optician]: {
    sv: 6500,
    type: `profession`,
    sector: `craftsmanship`,
    description: `makes and repairs eyeglasses.`,
    dailyWage: 190,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Printer]: {
    sv: 2000,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `a person who applies pressure to an inked surface resting upon a print medium (such as paper or cloth), thereby transferring the ink to manufacture a text.`,
    dailyWage: 140,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Restorer]: {
    sv: 10000,
    isHobby: true,
    type: `profession`,
    sector: `arts`,
    description: `repairs or renovates a work of art so as to return it to its original condition.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Soaper]: {
    sv: 3000,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `makes soap from accumulated mutton fat, wood ash, and natural soda.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Taxidermist]: {
    sv: 4000,
    type: `profession`,
    sector: `craftsmanship`,
    description: `prepares, stuffs, and mounts the skins of animals.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tinker]: {
    sv: 3000,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `travels from place to place mending utensils.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Weaponsmith]: {
    sv: 2500,
    type: `business`,
    sector: `craftsmanship`,
    description: `specializes in making and repairing weapons.`,
    dailyWage: 190,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Wheelwright]: {
    sv: 1500,
    type: `labourer`,
    sector: `craftsmanship`,
    description: `makes and repairs wooden wheels.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Assassin]: {
    sv: 5000,
    type: `profession`,
    sector: `crime`,
    description: `murders through stealth for reasons pertaining to money, politics, or religion.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bandit]: {
    sv: 8000,
    type: `profession`,
    sector: `crime`,
    description: `a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Burglar]: {
    sv: 500,
    type: `profession`,
    sector: `crime`,
    description: `illegally enters buildings and steals things.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Conman]: {
    sv: 750,
    type: `profession`,
    sector: `crime`,
    description: `tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Gamefighter]: {
    sv: 2000,
    type: `profession`,
    sector: `crime`,
    description: `engages in arena matches in which animals or monsters are pitted against one another, typically to the death.`,
    dailyWage: 190,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.CrimeBoss]: {
    sv: 6000,
    type: `profession`,
    sector: `crime`,
    description: `controls and supervises a criminal organization.`,
    dailyWage: 400,
    socialClass: `nobility`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cutpurse]: {
    sv: 500,
    type: `profession`,
    sector: `crime`,
    description: `a pickpocket or thief.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.DrugDealer]: {
    sv: 1500,
    type: `profession`,
    sector: `crime`,
    description: `dealer of illegal substances.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.DrugLord]: {
    sv: 6000,
    type: `profession`,
    sector: `crime`,
    description: `controls a network of persons involved in the illegal drugs trade and transactions.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Extortioner]: {
    sv: 2000,
    type: `profession`,
    sector: `crime`,
    description: `extorts money from someone by threatening to expose embarrassing information about them.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Fence]: {
    sv: 10000,
    type: `profession`,
    sector: `crime`,
    description: `deals in stolen goods.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Forger]: {
    sv: 10000,
    type: `profession`,
    sector: `crime`,
    description: `produces fraudulent copies or imitations.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Fugitive]: {
    sv: 2500,
    type: `labourer`,
    sector: `crime`,
    description: `a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.`,
    dailyWage: 20,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Highwayman]: {
    sv: 500,
    type: `profession`,
    sector: `crime`,
    description: `robs travelers on a road.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Kidnapper]: {
    sv: 1500,
    type: `profession`,
    sector: `crime`,
    description: `abducts people and holds them captive, typically to obtain a ransom.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.LoanShark]: {
    sv: 4500,
    type: `profession`,
    sector: `crime`,
    description: `charges extremely high rates of interest for moneylending, typically under illegal conditions.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Pirate]: {
    sv: 1500,
    type: `profession`,
    sector: `crime`,
    description: `attacks and robs ships at sea.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.WannabePirate]: {
    sv: 1500,
    type: `profession`,
    sector: `crime`,
    description: `dreams of becoming a full fledged pirate, but currently is just a rowdy sailor.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Poacher]: {
    sv: 5000,
    type: `labourer`,
    sector: `crime`,
    description: `hunts illegal game.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Poisoner]: {
    sv: 7000,
    type: `business`,
    sector: `crime`,
    description: `makes poisons to harm or kill.`,
    dailyWage: 300,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Marauder]: {
    sv: 3000,
    type: `profession`,
    sector: `crime`,
    description: `makes sudden, unprompted attacks against defenseless or near-defenseless settlements.`,
    dailyWage: 300,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Smuggler]: {
    sv: 2500,
    type: `profession`,
    sector: `crime`,
    description: `manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Affeeror]: {
    sv: 10000,
    type: `profession`,
    sector: `government and law`,
    description: `determines the values of fines and amercements.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Agister]: {
    sv: 1500,
    type: `business`,
    sector: `business`,
    description: `affords pasture to the livestock of others for a price.`,
    dailyWage: 120,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Alderman]: {
    sv: 1000,
    type: `profession`,
    sector: `government and law`,
    description: `a civic dignitary in the local council ranked below the mayor.`,
    dailyWage: 500,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Alienist]: {
    sv: 3000,
    type: `profession`,
    sector: `government and law`,
    description: `assesses the competence of a defendant in a court of law.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.AssayMaster]: {
    sv: 10000,
    type: `profession`,
    sector: `government and law`,
    description: `oversees the testing of currency.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Baron]: {
    sv: 2500,
    type: `profession`,
    sector: `government and law`,
    description: `a member of the lowest order of the nobility.`,
    dailyWage: 500,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Chancellor]: {
    sv: 5000,
    type: `profession`,
    sector: `government and law`,
    description: `a senior state or legal official.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Chief]: {
    sv: 9000,
    type: `profession`,
    sector: `government and law`,
    description: `leads or rules a people or clan.`,
    dailyWage: 100,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Conservationist]: {
    sv: 3000,
    isHobby: true,
    type: `profession`,
    sector: `government and law`,
    description: `advocates for the protection and preservation of the environment and wildlife.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Count]: {
    sv: 7000,
    type: `profession`,
    sector: `government and law`,
    description: `a nobleperson ranking above a viscount and below a marquess.`,
    dailyWage: 500,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Duke]: {
    sv: 15000,
    type: `profession`,
    sector: `government and law`,
    description: `rules over a duchy and is of the highest rank below the monarch.`,
    dailyWage: 900,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Emperor]: {
    sv: 25000,
    type: `profession`,
    sector: `government and law`,
    description: `the supreme sovereign ruler of an extensive group of states or countries under a single authority.`,
    dailyWage: 2400,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.King]: {
    sv: 20000,
    type: `profession`,
    sector: `government and law`,
    description: `the ruler of an independent state and its people.`,
    dailyWage: 2400,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.LadyInWaiting]: {
    sv: 3000,
    type: `labourer`,
    sector: `government and law`,
    description: `attends a queen, princess, or other high-ranking feminine nobleperson.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Marquess]: {
    sv: 5000,
    type: `profession`,
    sector: `government and law`,
    description: `a nobleperson ranking above a count and below a duke.`,
    dailyWage: 600,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.MasterOfCoin]: {
    sv: 7500,
    type: `profession`,
    sector: `government and law`,
    description: `supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.MasterOfTheRevels]: {
    sv: 1000,
    type: `profession`,
    sector: `government and law`,
    description: `responsible for overseeing royal festivities.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Notary]: {
    sv: 3000,
    isHobby: true,
    type: `profession`,
    sector: `government and law`,
    description: `performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Orator]: {
    sv: 3000,
    type: `profession`,
    sector: `government and law`,
    description: `makes statements on behalf of a group or individual nobleperson.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Page]: {
    sv: 3000,
    type: `profession`,
    sector: `government and law`,
    description: `a young attendant to a person of noble rank.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Prince]: {
    sv: 6000,
    type: `profession`,
    sector: `government and law`,
    description: `the direct descendant of a monarch.`,
    dailyWage: 500,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Senator]: {
    sv: 5000,
    type: `profession`,
    sector: `government and law`,
    description: `partakes in governmental decision-making after being elected.`,
    dailyWage: 500,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Sheriff]: {
    sv: 4500,
    type: `profession`,
    sector: `government and law`,
    description: `the chief executive officer in a county, having various administrative and judicial functions.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Spymaster]: {
    sv: 1000,
    type: `profession`,
    sector: `government and law`,
    description: `directs a network of subordinate espionage agents for a state, kingdom, or empire.`,
    dailyWage: 800,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Viscount]: {
    sv: 7000,
    type: `profession`,
    sector: `government and law`,
    description: `a nobleperson ranking above a baron and below a count.`,
    dailyWage: 700,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Ward]: {
    sv: 3000,
    type: `profession`,
    sector: `government and law`,
    description: `a member of a noble house who has been taken in by another noble family to be raised for a time.`,
    dailyWage: 100,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },
  [Profession.Acater]: {
    sv: 3000,
    type: `profession`,
    sector: `agriculture`,
    description: `provides and prepares foodstuffs or delicacies for events such as festivals.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tunner]: {
    sv: 5000,
    type: `labourer`,
    sector: `agriculture`,
    description: `fills casks in a brewery or winery.`,
    dailyWage: 30,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Barkeep]: {
    sv: 500,
    type: `profession`,
    sector: `hospitality`,
    description: `works and serves drinks in a bar.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },

  [Profession.Butler]: {
    sv: 2000,
    type: `profession`,
    sector: `hospitality`,
    description: `the chief servant of a household.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Caregiver]: {
    sv: 1000,
    type: `profession`,
    sector: `hospitality`,
    description: `looks after a sick, elderly, or disabled person.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.CharcoalMaker]: {
    sv: 2500,
    type: `labourer`,
    sector: `business`,
    description: `manufactures charcoal by carbonizing wood in a kiln.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Chatelaine]: {
    sv: 3000,
    type: `profession`,
    sector: `hospitality`,
    description: `a person in charge of a large household.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.ChimneySweeper]: {
    sv: 2500,
    type: `labourer`,
    sector: `business`,
    description: `a person, typically a child, who ascends chimneys to clean them.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Clerk]: {
    sv: 5000,
    type: `profession`,
    sector: `business`,
    description: `undertakes routine administrative duties in a business or bank.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Copyist]: {
    sv: 3000,
    type: `profession`,
    sector: `communication`,
    description: `makes copies of handwritten documents or music.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Croupier]: {
    sv: 1500,
    type: `profession`,
    sector: `hospitality`,
    description: `runs a gaming table by gathering in and paying out money or tokens.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Exterminator]: {
    sv: 2000,
    type: `labourer`,
    sector: `agriculture`,
    description: `exterminates unwanted rodents and insects.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.FoodAndDrinkTaster]: {
    sv: 3500,
    type: `profession`,
    sector: `hospitality`,
    description: `ingests food that was prepared for someone else to confirm it is safe to eat.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Gongfarmer]: {
    sv: 800,
    type: `labourer`,
    sector: `agriculture`,
    description: `digs out and removes excrement from privies and cesspits.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Gravedigger]: {
    sv: 500,
    type: `labourer`,
    sector: `religion`,
    description: `digs graves for the purposes of a funeral ceremony.`,
    dailyWage: 40,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Groundskeeper]: {
    sv: 1000,
    type: `labourer`,
    sector: `agriculture`,
    description: `maintains an athletic field, a park, or the grounds of a graveyard or other institution.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.KitchenDrudge]: {
    sv: 500,
    type: `labourer`,
    sector: `business`,
    description: `performs menial work in a kitchen.`,
    dailyWage: 50,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Knacker]: {
    sv: 2000,
    type: `labourer`,
    sector: `agriculture`,
    description: `disposes of dead or unwanted animals.`,
    dailyWage: 40,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Lamplighter]: {
    sv: 5000,
    type: `labourer`,
    sector: `business`,
    description: `lights street or road lights at dusk.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.LaundryWorker]: {
    sv: 2500,
    type: `labourer`,
    sector: `business`,
    description: `a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.`,
    dailyWage: 40,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Lector]: {
    sv: 4000,
    type: `profession`,
    sector: `communications`,
    description: `reads to others while they work for entertainment.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Longshoreman]: {
    sv: 1000,
    type: `labourer`,
    sector: `business`,
    description: `loads and unloads ships in a port.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Nanny]: {
    sv: 800,
    type: `labourer`,
    sector: `caregiver`,
    description: `a servant employed to look after a young child or children.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Operator]: {
    sv: 2500,
    type: `labourer`,
    sector: `construction`,
    description: `a laborer who operates equipment, typically in construction.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.PastryChef]: {
    sv: 1500,
    type: `profession`,
    sector: `food`,
    description: `makes desserts, especially cakes and pastries.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Plumber]: {
    sv: 3000,
    type: `profession`,
    sector: `construction`,
    description: `installs and repairs the fittings of water supply and sanitation.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Porter]: {
    sv: 3000,
    type: `profession`,
    sector: `labourer`,
    description: `carries luggage and other loads.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Harlot]: {
    sv: 400,
    synonyms: [`prostitute`, `lady of the night`, `call girl`, `sex worker`],
    type: `profession`,
    sector: `business`,
    description: `engages in sexual activity for payment.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Quarryman]: {
    sv: 1200,
    type: `labourer`,
    sector: `construction`,
    description: `quarries stone.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Stagehand]: {
    sv: 2500,
    type: `labourer`,
    sector: `arts`,
    description: `moves scenery or props before or during the performance of a theatrical production.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.StreetCleaner]: {
    sv: 4000,
    type: `labourer`,
    sector: `construction`,
    description: `cleans streets and alleyways after dark.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.TalentScout]: {
    sv: 7000,
    type: `profession`,
    sector: `arts`,
    description: `searches for talented individuals who can be employed or promoted.`,
    dailyWage: 110,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Trainer]: {
    sv: 5000,
    isHobby: true,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `trains someone in a particular skill, usually physical, for money.`,
    dailyWage: 120,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.WaterBearer]: {
    sv: 200,
    type: `labourer`,
    sector: `agriculture`,
    description: `brings water from rivers, wells, and lakes back to their settlement.`,
    dailyWage: 40,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Abjurer]: {
    sv: 5000,
    type: `profession`,
    sector: `magic`,
    description: `a mage focused in protective spells.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Alchemist]: {
    sv: 2000,
    type: `profession`,
    sector: `science`,
    description: `transforms or creates something within nature through the magical and scientific manipulation of chemicals.`,
    dailyWage: 1500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Archmage]: {
    sv: 15000,
    type: `profession`,
    sector: `magic`,
    description: `an extremely powerful mage.`,
    dailyWage: 1800,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Artificer]: {
    sv: 7500,
    type: `profession`,
    sector: `magic`,
    description: `unlocks magic in everyday objects as well as being an inventor.`,
    dailyWage: 700,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },

  [Profession.Conjurer]: {
    sv: 7000,
    type: `profession`,
    sector: `magic`,
    description: `conjures spirits or familiars.`,
    dailyWage: 600,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Elementalist]: {
    sv: 8000,
    type: `profession`,
    sector: `magic`,
    description: `manipulates nature’s elements to their will.`,
    dailyWage: 600,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Enchanter]: {
    sv: 7500,
    type: `profession`,
    sector: `magic`,
    description: `uses sorcery to put someone or something under a spell.`,
    dailyWage: 3000,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Evoker]: {
    sv: 8000,
    type: `profession`,
    sector: `magic`,
    description: `manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.`,
    dailyWage: 2300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.HearthWitch]: {
    sv: 6000,
    type: `profession`,
    sector: `magic`,
    description: `incorporates spells and enchantments in cooking.`,
    dailyWage: 1800,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Illusionist]: {
    sv: 7500,
    type: `profession`,
    sector: `magic`,
    description: `performs tricks and spells that deceive the senses.`,
    dailyWage: 400,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Mage]: {
    sv: 5000,
    type: `profession`,
    sector: `magic`,
    description: `a magic-user.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Medium]: {
    sv: 8000,
    type: `profession`,
    sector: `magic`,
    description: `uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.`,
    dailyWage: 400,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Meteorologist]: {
    sv: 1000,
    type: `profession`,
    sector: `magic`,
    description: `forecasts and manipulates weather.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Ritualist]: {
    sv: 4000,
    type: `profession`,
    sector: `magic`,
    description: `practices or advocates the observance of ritual (formula intended to trigger a magical effect on a person or objects).`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Runecaster]: {
    sv: 10000,
    type: `profession`,
    sector: `magic`,
    description: `uses special alphabets to create runes (symbols possessing magical effects capable of being used multiple times).`,
    dailyWage: 600,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Sage]: {
    sv: 10000,
    type: `profession`,
    sector: `magic`,
    description: `a wise and experienced magic-user.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Shapeshifter]: {
    sv: 7000,
    type: `profession`,
    sector: `magic`,
    description: `a person with the ability to change their physical form.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Summoner]: {
    sv: 8000,
    type: `profession`,
    sector: `magic`,
    description: `a mage able to summon forth magical beasts, creatures, and monsters.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Transmuter]: {
    sv: 8000,
    type: `profession`,
    sector: `magic`,
    description: `alters matter in form, appearance, or nature.`,
    dailyWage: 600,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Witchdoctor]: {
    sv: 3500,
    type: `profession`,
    sector: `magic`,
    description: `a tribal mage with powers of healing, divination, and protection against the magic of others.`,
    dailyWage: 190,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Witch]: {
    sv: 4000,
    type: `profession`,
    sector: `magic`,
    description: `a woman who has supernatural powers and practices sorcery, typically in solitude.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Wordsmith]: {
    sv: 9000,
    type: `profession`,
    sector: `magic`,
    description: `draws their power from language and casts by dictation.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Admiral]: {
    sv: 1000,
    type: `profession`,
    sector: `military`,
    description: `commands a fleet or naval squadron.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bailiff]: {
    sv: 5000,
    type: `profession`,
    sector: `military`,
    description: `looks after prisoners.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bodyguard]: {
    sv: 3000,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `escorts and protects another person, especially a dignitary.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bouncer]: {
    sv: 2500,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `prevents troublemakers from entering or to eject them from the premises of an establishment.`,
    dailyWage: 170,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Castellan]: {
    sv: 8000,
    type: `profession`,
    sector: `government and law`,
    description: `the governor of a castle.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cavalier]: {
    sv: 2000,
    type: `profession`,
    sector: `military`,
    description: `a skilled horseback rider.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.CityWatch]: {
    sv: 4500,
    type: `profession`,
    sector: `military`,
    description: `an officer of law enforcement who resides in larger towns or cities.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Commissar]: {
    sv: 7500,
    type: `profession`,
    sector: `military`,
    description: `teaches principles and policies to military units.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Constable]: {
    sv: 500,
    type: `profession`,
    sector: `military`,
    description: `an officer with limited policing authority, typically in a small town.`,
    dailyWage: 300,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Investigator]: {
    sv: 5000,
    type: `profession`,
    sector: `business`,
    description: `investigates and solves crimes.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Fifer]: {
    sv: 3000,
    type: `profession`,
    sector: `military`,
    description: `a non-combatant foot soldier who sounds signals for changes in formation in combat.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Duelist]: {
    sv: 3000,
    isHobby: true,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `skilled in one-on-one combat.`,
    dailyWage: 250,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Executioner]: {
    sv: 2500,
    type: `profession`,
    sector: `military`,
    description: `carries out a sentence of death on a legally condemned person.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Firefighter]: {
    sv: 500,
    type: `labourer`,
    sector: `government and law`,
    description: `extinguishes fires.`,
    dailyWage: 80,
    socialClass: `paupery`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.InspectionOfficer]: {
    sv: 4000,
    type: `profession`,
    sector: `military`,
    description: `responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.IntelligenceOfficer]: {
    sv: 10000,
    type: `profession`,
    sector: `military`,
    description: `collects, compiles and organizes information about the enemy.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Lieutenant]: {
    sv: 2000,
    type: `profession`,
    sector: `military`,
    description: `an officer of middle rank in the armed forces.`,
    dailyWage: 300,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Marksman]: {
    sv: 800,
    type: `profession`,
    sector: `military`,
    description: `in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Marshall]: {
    sv: 5000,
    type: `profession`,
    sector: `military`,
    description: `has the charge of the cavalry in the household of a monarch.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Medic]: {
    sv: 600,
    type: `profession`,
    sector: `military`,
    description: `a medical practitioner equipped for the battlefield.`,
    dailyWage: 300,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Mercenary]: {
    sv: 800,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `a soldier without allegiance who works for money, typically a member of a company or guild.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Quartermaster]: {
    sv: 3500,
    type: `profession`,
    sector: `military`,
    description: `responsible for providing quarters, rations, clothing, and other supplies.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.RoyalGuard]: {
    sv: 5000,
    type: `profession`,
    sector: `military`,
    description: `responsible for the protection of a royal person.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Runner]: {
    sv: 750,
    type: `labourer`,
    sector: `military`,
    description: `carries information between lines in wartime.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Sapper]: {
    sv: 5000,
    type: `labourer`,
    sector: `military`,
    description: `a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.`,
    dailyWage: 150,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Sergeant]: {
    sv: 8000,
    type: `profession`,
    sector: `military`,
    description: `an officer instructed with a protective duty, typically worth more than other officers.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.SergeantAtArms]: {
    sv: 5000,
    type: `profession`,
    sector: `military`,
    description: `charged with keeping order during meetings and, if necessary, participates in battle.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Scout]: {
    sv: 5000,
    type: `profession`,
    sector: `military`,
    description: `sent ahead of a main force so as to gather information about the enemy's position, strength, or movements.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.SiegeArtillerist]: {
    sv: 10000,
    type: `profession`,
    sector: `military`,
    description: `works the artillery machines of an army.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.SlaveDriver]: {
    sv: 1500,
    type: `profession`,
    sector: `agriculture`,
    description: `oversees and urges on slaves at work.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.SpecialForceSoldier]: {
    sv: 6000,
    type: `profession`,
    sector: `military`,
    description: `carries out special operations.`,
    dailyWage: 300,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Spy]: {
    sv: 4500,
    type: `profession`,
    sector: `military`,
    description: `secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.`,
    dailyWage: 200,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Tactician]: {
    sv: 7000,
    type: `profession`,
    sector: `military`,
    description: `uses a carefully planned military strategy to achieve a specific end.`,
    dailyWage: 400,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Tollkeeper]: {
    sv: 2000,
    type: `profession`,
    sector: `government and law`,
    description: `collects tolls at a bridge, road etc. where a charge is made.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Warden]: {
    sv: 5000,
    type: `profession`,
    sector: `government and law`,
    description: `responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Warmage]: {
    sv: 10000,
    type: `profession`,
    sector: `military`,
    description: `a soldier skilled in destructive battle magic.`,
    dailyWage: 700,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Abbot]: {
    sv: 6000,
    type: `profession`,
    sector: `religion`,
    description: `the head of an abbey of monks.`,
    dailyWage: 700,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Acolyte]: {
    sv: 3000,
    type: `profession`,
    sector: `religion`,
    description: `assists the celebrant in a religious service or procession.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Almoner]: {
    sv: 1500,
    type: `profession`,
    sector: `religion`,
    description: `distributes money and food to poor people.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Archbishop]: {
    sv: 5000,
    type: `profession`,
    sector: `religion`,
    description: `responsible for an archdiocese, their surrounding district.`,
    dailyWage: 900,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bishop]: {
    sv: 10000,
    type: `profession`,
    sector: `religion`,
    description: `a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.`,
    dailyWage: 600,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cantor]: {
    sv: 2000,
    isHobby: true,
    type: `profession`,
    sector: `religion`,
    description: `sings liturgical music and leads prayer in a synagogue.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cardinal]: {
    sv: 6500,
    type: `profession`,
    sector: `religion`,
    description: `a leading dignitary of a church, nominated by the highest official.`,
    dailyWage: 600,
    socialClass: `nobility`,
    socialClassRoll() {
      return 75 + dice(8, 6)
    },
  },

  [Profession.Confessor]: {
    sv: 4000,
    isHobby: true,
    type: `profession`,
    sector: `religion`,
    description: `hears confessions and gives absolution and spiritual counsel.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Cultist]: {
    sv: 2000,
    type: `profession`,
    sector: `religion`,
    description: `a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.CultLeader]: {
    sv: 6000,
    type: `profession`,
    sector: `religion`,
    description: `the organizational leader of a cult who is occasionally also the founder.`,
    dailyWage: 400,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Deacon]: {
    sv: 800,
    type: `profession`,
    sector: `religion`,
    description: `an ordained minister of an order ranking below that of priest.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Diviner]: {
    sv: 9000,
    type: `profession`,
    sector: `religion`,
    description: `seeks ultimate divination in order to further understand or meet godly substance.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Exorcist]: {
    sv: 6000,
    type: `profession`,
    sector: `religion`,
    description: `expels or attempts to expel evil spirits from a person or place.`,
    dailyWage: 300,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.HighPriest]: {
    sv: 15000,
    type: `profession`,
    sector: `religion`,
    description: `the chief priest of a religion.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Inquisitor]: {
    sv: 3000,
    type: `profession`,
    sector: `religion`,
    description: `seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.`,
    dailyWage: 400,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Missionary]: {
    sv: 2000,
    isHobby: true,
    type: `profession`,
    sector: `religion`,
    description: `goes on a religious mission to promote their faith in a foreign place.`,
    dailyWage: 50,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Pardoner]: {
    sv: 700,
    type: `profession`,
    sector: `religion`,
    description: `raises money for religious works by soliciting offerings and granting indulgences.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Prophet]: {
    sv: 8000,
    type: `profession`,
    sector: `religion`,
    description: `regarded as an inspired teacher or proclaimer of the will of God.`,
    dailyWage: 10000,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Sexton]: {
    sv: 800,
    type: `labourer`,
    sector: `religion`,
    description: `looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.`,
    dailyWage: 80,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Templar]: {
    sv: 500,
    type: `profession`,
    sector: `military`,
    description: `fights in a religious military order.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Abecedarian]: {
    sv: 1500,
    type: `profession`,
    sector: `science`,
    description: `teaches the illiterate.`,
    dailyWage: 60,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Anthropologist]: {
    sv: 5000,
    type: `profession`,
    sector: `science`,
    description: `studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Apprentice]: {
    sv: 200,
    type: `profession`,
    sector: `craftsmanship`,
    description: `studies a trade under a skilled employer.`,
    dailyWage: 70,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Archeologist]: {
    sv: 2000,
    type: `profession`,
    sector: `science`,
    description: `studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Assayer]: {
    sv: 2000,
    type: `profession`,
    sector: `science`,
    description: `determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.`,
    dailyWage: 230,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },

  [Profession.Astronomer]: {
    sv: 5000,
    type: `profession`,
    sector: `science`,
    description: `makes observations of celestial and scientific phenomena within the material plane.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Bloodletter]: {
    sv: 3000,
    type: `profession`,
    sector: `science`,
    description: `surgically removes some of a patient's blood for therapeutic purposes.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Botanist]: {
    sv: 2000,
    isHobby: true,
    type: `profession`,
    sector: `science`,
    description: `an expert in or student of the scientific study of plants.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Chemist]: {
    sv: 3500,
    isHobby: true,
    type: `profession`,
    sector: `science`,
    description: `engaged in chemical research or experiments.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Dean]: {
    sv: 8000,
    type: `profession`,
    sector: `science`,
    description: `the head of a college or university.`,
    dailyWage: 500,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Drakologist]: {
    sv: 10000,
    type: `profession`,
    sector: `science`,
    description: `studies or is an expert in the branch of zoology concerned with dragons.`,
    dailyWage: 190,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Engineer]: {
    sv: 5000,
    type: `profession`,
    sector: `science`,
    description: `designer of a machine or structure.`,
    dailyWage: 180,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Entomologist]: {
    sv: 6000,
    type: `profession`,
    sector: `science`,
    description: `studies or is an expert in the branch of zoology concerned with insects.`,
    dailyWage: 175,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Horologist]: {
    sv: 8000,
    type: `profession`,
    sector: `science`,
    description: `a scholar of time and entropy.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Mathematician]: {
    sv: 5000,
    isHobby: true,
    type: `profession`,
    sector: `science`,
    description: `a scholar of the abstract science of number, quantity, and space.`,
    dailyWage: 230,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Optometrist]: {
    sv: 3000,
    type: `profession`,
    sector: `science`,
    description: `examines the eyes for visual defects and prescribes eyeglasses.`,
    dailyWage: 210,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Scribe]: {
    sv: 2000,
    type: `profession`,
    sector: `business`,
    description: `copies out manuscripts.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Theologian]: {
    sv: 6000,
    type: `profession`,
    sector: `science`,
    description: `engages in the study of the nature of God and religious belief.`,
    dailyWage: 130,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Tutor]: {
    sv: 600,
    type: `profession`,
    sector: `science`,
    description: `charged with the instruction and guidance of another.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Zoologist]: {
    sv: 3500,
    type: `profession`,
    sector: `science`,
    description: `an expert in or a student of the behavior, physiology, classification, and distribution of animals.`,
    dailyWage: 140,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Boatman]: {
    sv: 500,
    type: `profession`,
    sector: `naval`,
    description: `mans a small seacraft.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Bosun]: {
    sv: 1000,
    type: `profession`,
    sector: `transportation`,
    description: `in charge of organizing the equipment and crew of a ship.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Wagoner]: {
    sv: 400,
    type: `profession`,
    sector: `transportation`,
    description: `drives a horse-drawn wagon.`,
    dailyWage: 90,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.CabinBoy]: {
    sv: 9000,
    type: `profession`,
    sector: `naval`,
    description: `waits on the orders of a ships officers and passengers.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Charioteer]: {
    sv: 300,
    type: `profession`,
    sector: `military`,
    description: `drives a chariot.`,
    dailyWage: 80,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Carter]: {
    sv: 500,
    type: `business`,
    sector: `transportation`,
    description: `transports goods by cart.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Ferryman]: {
    sv: 2500,
    type: `profession`,
    sector: `naval`,
    description: `operates a ferry.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.FirstMate]: {
    sv: 1000,
    type: `profession`,
    sector: `naval`,
    description: `the deck officer second in command to the master of a ship.`,
    dailyWage: 230,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Helmsman]: {
    sv: 2000,
    type: `profession`,
    sector: `naval`,
    description: `steers a ship or boat.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Navigator]: {
    sv: 1500,
    type: `profession`,
    sector: `naval`,
    description: `directs the route or course of a ship or other form of transportation, especially by using instruments and maps.`,
    dailyWage: 180,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Purser]: {
    sv: 2500,
    type: `profession`,
    sector: `naval`,
    description: `keeps the accounts of a ship, especially as the head steward on a passenger vessel.`,
    dailyWage: 210,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Shipwright]: {
    sv: 3500,
    type: `profession`,
    sector: `craftsmanship`,
    description: `a carpenter skilled in ship construction and repair.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Adventurer]: {
    sv: 2000,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Beggar]: {
    sv: 2500,
    type: `profession`,
    sector: `outcast`,
    description: `lives by asking for money or food.`,
    dailyWage: 10,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.MonsterHunter]: {
    sv: 4500,
    isHobby: true,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `takes on jobs to hunt down and kill or capture dangerous creatures.`,
    dailyWage: 230,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.BountyHunter]: {
    sv: 3500,
    isHobby: true,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `pursues a criminal or fugitive for whom a reward is offered.`,
    dailyWage: 180,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.CrossingSweeper]: {
    sv: 6500,
    type: `profession`,
    sector: `outcast`,
    description: `sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.`,
    dailyWage: 20,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Deserter]: {
    sv: 3500,
    type: `profession`,
    sector: `outcast`,
    description: `a member of the armed forces who has deserted.`,
    dailyWage: 15,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.DisgracedNoble]: {
    sv: 5000,
    type: `profession`,
    sector: `outcast`,
    description: `a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.`,
    dailyWage: 100,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Drunkard]: {
    sv: 550,
    type: `profession`,
    sector: `outcast`,
    description: `a person who is habitually drunk and considers themselves a professional in the task.`,
    dailyWage: 25,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.DungeonDelver]: {
    sv: 5500,
    type: `professional`,
    sector: Sector.Adventuring,
    description: `navigates underground labyrinths in search of any treasure they may find.`,
    dailyWage: 150,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Elder]: {
    sv: 600,
    type: `profession`,
    sector: `hospitality`,
    description: `a person of a greater age, especially one with a respected position in society.`,
    dailyWage: 200,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Exile]: {
    sv: 750,
    type: `profession`,
    sector: `outcast`,
    description: `lives away from their native country, either from choice or compulsion.`,
    dailyWage: 30,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Explorer]: {
    sv: 3500,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `explores unfamiliar areas in search of geographical or scientific information.`,
    dailyWage: 120,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.ExCriminal]: {
    sv: 1200,
    type: `profession`,
    sector: `outcast`,
    description: `a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.`,
    dailyWage: 60,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.FolkHero]: {
    sv: 4000,
    type: `profession`,
    sector: Sector.Adventuring,
    description: `a celebrity who is greatly admired by many people of a particular kind or in a particular place.`,
    dailyWage: 80,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Gambler]: {
    sv: 800,
    isHobby: true,
    type: `profession`,
    sector: `crime`,
    description: `bets money on sports, card games, or games of chance in the hope of a profit.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.GraveRobber]: {
    sv: 100,
    type: `profession`,
    sector: `crime`,
    description: `steals valuables from graves and tombs.`,
    dailyWage: 130,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Heretic]: {
    sv: 2500,
    type: `profession`,
    sector: `outcast`,
    description: `differs in opinion from established religious dogma.`,
    dailyWage: 80,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Housewife]: {
    sv: 150,
    type: `profession`,
    sector: `hospitality`,
    description: `cares for his or her family by managing household affairs and completing housework.`,
    dailyWage: 40,
    socialClass: `commoner`,
    socialClassRoll() {
      return 50 + dice(8, 6)
    },
  },
  [Profession.Prisoner]: {
    sv: 350,
    type: `profession`,
    sector: `crime`,
    description: `held in confinement as a punishment for crimes they have been convicted of.`,
    dailyWage: 10,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.RagAndBoneMan]: {
    sv: 750,
    type: `labourer`,
    sector: `business`,
    description: `collects unwanted household items and sells them to merchants.`,
    dailyWage: 25,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.PoliticalDissident]: {
    sv: 4500,
    type: `labourer`,
    sector: `government and law`,
    description: `rises in opposition or armed resistance against an established government or ruler.`,
    dailyWage: 100,
    socialClass: `peasantry`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.Refugee]: {
    sv: 5000,
    type: `profession`,
    sector: `outcast`,
    description: `leaves their home in order to escape war, persecution, or natural disaster.`,
    dailyWage: 20,
    socialClass: `paupery`,
    socialClassRoll() {
      return 20 + dice(8, 6)
    },
  },
  [Profession.RunawaySlave]: {
    sv: 3000,
    type: `labourer`,
    sector: `outcast`,
    description: `a slave who has left their master and traveled without authorization.`,
    dailyWage: 100,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Squatter]: {
    sv: 800,
    type: `profession`,
    sector: `crime`,
    description: `unlawfully occupies an uninhabited building or unused land.`,
    dailyWage: 15,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(4, 6)
    },
  },
  [Profession.Vagabond]: {
    sv: 1000,
    type: `profession`,
    sector: `outcast`,
    description: `wanders from place to place without a permanent home or job.`,
    dailyWage: 15,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
  [Profession.Urchin]: {
    sv: 500,
    type: `profession`,
    sector: `outcast`,
    description: `a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.`,
    dailyWage: 5,
    socialClass: `paupery`,
    socialClassRoll() {
      return 5 + dice(8, 6)
    },
  },
}
