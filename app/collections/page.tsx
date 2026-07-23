import './collections.css';
import Hero from '@/components/collections/Hero';
import Intro from '@/components/collections/Intro';
import Quote from '@/components/collections/Quote';
import CollectionRow from '@/components/collections/CollectionRow';
import SiteFooter from '@/components/shared/SiteFooter';

export default function CollectionsPage() {
  return (
    <main className="cpage">
      <Hero />
      <Intro />

      <Quote>
        It is not about softness. /// It is about substance.
      </Quote>
      <CollectionRow name="MAORI" image="/images/collections/maori.webp" alt="MAORI rug leaning against a terracotta wall" side="left" href="/collections/maori/024-0026">
        Inspired by the meaning of its name — common, natural, essential — MAORI embraces the
        quiet strength of raw materials. Crafted in 100% wool, each piece celebrates texture in
        its most honest form. Woven rather than tufted, its structure reveals a more organic,
        grounded character. The finish is tactile, slightly rustic, intentionally imperfect —
        echoing the growing movement toward natural fibers and elemental interiors. Designed in
        neutral palettes with select tonal explorations, MAORI brings warmth, durability and
        understated presence to high-traffic spaces.
      </CollectionRow>

      <Quote>
        It is not about statement. /// It is about essence.
      </Quote>
      <CollectionRow name="SOMA" image="/images/collections/soma.webp" alt="SOMA rug in a green courtyard" side="right" href="/collections/soma/030-0009">
        Rooted in the idea of the body as the vessel of the soul, SOMA is conceived as a quiet
        presence — refined, intentional and deeply harmonious. Sublimely soft and monochromatic,
        it reveals its design through subtle detailing rather than contrast. Its sophistication
        lies in restraint — in the balance between texture, tone and proportion. Designed in
        timeless neutrals, SOMA adapts effortlessly to diverse interiors, bringing warmth and
        calm to medium to low-traffic spaces.
      </CollectionRow>

      <Quote>
        It is not about decoration. /// It is about order
      </Quote>
      <CollectionRow name="EQUUS" image="/images/collections/equus.webp" alt="EQUUS tile pattern with leaf shadows" side="left" href="/collections/equus/041-0001">
        EQUUS moves in quiet repetition. Lines align, forms return, and structure reveals itself
        through subtle shifts in height and shadow. Hand-carved grids create depth you don&rsquo;t
        just see — you sense. Crafted in luminous Tencel, its surface is exceptionally soft,
        allowing light to glide across its geometry with quiet intensity. Balanced in refined
        neutrals, EQUUS feels grounded yet elevated — a composition of discipline and softness,
        held in perfect tension.
      </CollectionRow>

      <Quote>
        It instills a sense of calm confidence. /// A softness that welcomes, a structure that endures.
      </Quote>

      <CollectionRow name="AMHARA" image="/images/collections/amhara.webp" alt="AMHARA rug among reeds" side="right" href="/collections/amhara/039-0001">
        Meaning pleasing, beautiful and gracious, AMHARA unfolds as a quiet expression of warmth
        and depth. Woven in New Zealand wool through a refined loom technique, its surface reveals
        an unexpected softness — gentle to the touch, yet inherently strong. Earth-toned
        compositions move subtly across varied designs, each carrying a grounded elegance shaped
        by texture and tone. Beneath its delicacy lies the enduring resilience of wool, allowing
        the piece to hold space with both tenderness and strength.
      </CollectionRow>

      <Quote>
        It does not retreat from light. /// It lives in it.
      </Quote>
      <CollectionRow name="HELIOS" image="/images/collections/helios.webp" alt="HELIOS rug on an outdoor patio" side="left" href="/collections/helios/038-0001">
        Named after the sun, HELIOS radiates strength and clarity. Its presence is bold yet
        refined — defined by powerful tonal compositions that shift beautifully under natural
        light. Crafted in recycled P.E.T, the surface carries an unexpected softness, echoing the
        comfort of wool while designed to endure the elements. Resistant, resilient and unwavering
        beneath the sun, it moves effortlessly between interior and exterior spaces.
      </CollectionRow>

      <Quote>
        It is not accidental. /// It is intentional.
      </Quote>
      <CollectionRow name="MANCHAHA" image="/images/collections/manchaha.webp" alt="MANCHAHA rug detail" side="right" href="/collections/manchaha/040-0001">
        Meaning desired and chosen, MANCHAHA expresses design as an act of intention. Its
        composition feels free yet deliberate — bold in character, yet deeply considered. Hand
        tufted in luminous Tencel, sculpted relief and bouclé detailing create layered depth
        within refined neutral tones, giving the piece presence without overpowering its
        surroundings. Soft to the touch and balanced in scale, MANCHAHA enhances a space by
        completing it.
      </CollectionRow>

       <Quote>
        It is not about statement. /// It is about essence.
      </Quote>
      <CollectionRow
        name="ALUNA"
        image="/images/products/aluna/043-0001/main.webp"
        alt="ALUNA rug with abstract geometric lines"
        side="left"
        href="/collections/aluna/043-0001"
      >
        Aluna is born from the exploration of geometry, balance, and artistic expression. Its clean
        lines and abstract compositions create a serene visual presence, where each form engages in
        a subtle and sophisticated dialogue with the surrounding space. Expertly hand-tufted from
        100% wool, each rug features carefully sculpted textures and subtle reliefs that bring
        depth, warmth, and a rich tactile experience.
      </CollectionRow>
      
      <Quote>
        It does not retreat from light. /// It lives in it.
      </Quote>
      <CollectionRow
        name="ARYA"
        image="/images/products/arya/037-0001/main.webp"
        alt="ARYA ribbed rug"
        side="right"
        href="/collections/arya/037-0001"
      >
        Born from the elegance of simple lines and the richness of texture, this collection
        features a ribbed design that creates a subtle, sophisticated visual rhythm, bringing
        depth, softness, and a natural sense of harmony to any space. Its light presence transforms
        simplicity into an expression of comfort, subtle luster, and timeless serenity.
      </CollectionRow>

      <Quote>
        It is not accidental. /// It is intentional.
      </Quote>
      <CollectionRow
        name="LATTICE"
        image="/images/products/lattice/031-0008/main.webp"
        alt="LATTICE mesh-woven rug in terracotta"
        side="left"
        href="/collections/lattice/031-0008"
      >
        Inspired by the idea of a mesh, matrix, or interconnected weave, Lattice expresses a subtle
        visual balance, with an enveloping presence that brings serenity and sophistication to any
        space. Hand-tufted in 100% wool, it features bouclé details that add dimension and tactile
        richness, creating a natural, warm, and refined feel.
      </CollectionRow>

      <SiteFooter bgImage="/images/collections/footer-bg.webp" />
    </main>
  );
}
