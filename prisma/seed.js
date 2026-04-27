const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        lang: 'de',
        title: 'Die Zukunft der Stammzellentherapie in Riga',
        content: `Die orthopädische Medizin wandelt sich rasant. Durch den Einsatz von autologen Stammzellen können wir heute Gelenkstrukturen auf natürliche Weise reparieren, wo vor 5 Jahren noch künstliche Gelenke notwendig waren.\n\nRegeneration Clinic ist Vorreiter in der Implementierung neuester GMP-Richtlinien und bietet hochreine Injektionen zur Regeneration von Knorpelgewebe an. Dies führt nicht nur zu schnellerer Schmerzfreiheit, sondern bewahrt auch die natürliche Biomechanik des Körpers.`
      },
      {
        lang: 'de',
        title: '3.0 Tesla MRT: Warum Präzision alles ist',
        content: `Eine erfolgreiche Therapie beginnt immer mit einer fehlerfreien Diagnose. Unsere hauseigenen High-End MRT Scanner von Siemens Healthineers arbeiten mit einer unfassbaren Auflösung.\n\nDurch das extrem starke Magnetfeld von 3.0 Tesla können wir feinste Geweberisse, verborgene Entzündungen und strukturelle Anomalien erkennen, die auf herkömmlichen Geräten schlichtweg unsichtbar sind. Diese optische Klarheit rettet Patienten vor Fehlbehandlungen und garantiert einen punktgenauen Heilanlauf.`
      },
      {
        lang: 'de',
        title: 'Minimalinvasive Schmerzbehandlungen',
        content: `Lebensqualität bedeutet Schmerzfreiheit. Unsere Chefärzte führen interventionelle Verfahren direkt an der Wirbelsäule durch – gesteuert durch modernste Echtzeit-Bildgebung.\n\nDies ermöglicht es uns, Medikamente millimetergenau an die betroffenen Nervenwurzeln zu injizieren, um langanhaltende Linderung bei Bandscheibenvorfällen oder Spinalkanalstenosen zu erzielen, ganz ohne offene Operation.`
      },
      {
        lang: 'en',
        title: 'The Future of Stem Cell Therapy at Regeneration Clinic',
        content: `Orthopedic medicine is changing rapidly. Natural joint structures can now be repaired through the use of autologous stem cells. This means faster relief and preservation of the body's natural biomechanics.`
      }
    ]
  });

  console.log("3 German & 1 English Placeholder News seeded!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
