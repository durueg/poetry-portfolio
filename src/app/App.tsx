import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import portraitPhoto from "@/imports/IMG_5742.JPG";
import plathEssayPreview from "@/imports/image-1.png";
import yellowWallpaperPreview from "@/imports/image-2.png";
import dickinsonPreview from "@/imports/image-3.png";
import kjamesPreview from "@/imports/image-4.png";

const poems = [
  {
    id: 1,
    title: "Three Words and a Farewell",
    year: "2026",
    form: "Free verse",
    excerpt: `The look you gave me the last time we spoke
I didn’t know it would be the last
Your eyes seemed to know
they carried a sorrow I couldn’t name,`,
    full: `The look you gave me the last time we spoke
I didn’t know it would be the last
Your eyes seemed to know
they carried a sorrow I couldn’t name,
as though they were already letting go of me,
of us,
of everything we had built between our hands
I looked into them once more
They were full of dread,
Full of fatigue,
The kind that settles deep in the bones
You knew, deep down, you did.
Then you smiled at me,
Softly.
Deliberately,
With the certainty of someone making peace with an ending.
I drew a breath and held it,
"I love you,"
For a moment,
Your weariness rose to the surface,
Unhidden now.

"I know," you said.
"Me too."
And somehow those three words
Felt less like a promise,
And more like a farewell.

The silence that followed
Stretched farther than the distance between us.

I wanted to ask you to stay.
To fight.
To tell me I was wrong.

Instead, I watched the evening settle
In the corners of the room,
Watched the light leave your face
Little by little.

What was left to say?
Love had already said everything.
And grief had begun translating it into another language.

Sometimes I still see that smile,
In the moments before sleep.

Not the sadness,
Not the fear.
Just that quiet acceptance
Hidden behind your eyes.

The look of someone standing at a doorway
They know they must walk through alone.`,
    collection: "Tidebound",
  },
  {
    id: 2,
    title: "The Space Left Behind",
    year: "2025",
    form: "Free Verse",
    excerpt:
      "I used to love him. Not in the casual way people talk about love.",
    full: `I used to love him.
Not in the casual way people talk about love,
But in the way the ocean loves the shore,
Constant, inevitable, relentless,
Even when the distance between them feels endless.

His blonde hair, soft and familiar,
Like golden threads I wanted to tangle my fingers in forever,
But I never could.
The miles stretched between us,
A space too wide, too cruel to close.
Yet I could still feel him,
As if his breath lingered just beyond my reach.

Those ocean blue eyes,
They held storms and stillness all at once,
Even from afar, I drowned in them.
I memorized them through a screen,
Staring into a version of him I couldn’t touch,
Hoping the pixels would somehow keep me warm.

His face, etched in my memory,
That beautiful, gentle nose,
Perfect in its imperfection,
A detail I can’t seem to forget,
Even when I try.
But I never felt its softness under my fingertips,
Only imagined what it must feel like to be that close.

And now, I miss him.
Not just his body, his presence,
But the way he made space in my heart,
A space that feels hollow now,
Echoing with memories that never had the chance to be real.
We existed in the in-between,
Our love spanning cities, miles, oceans,
Yet it was always there, as sure as the sun rising.

I miss his existence,
The simple fact of him being here,
Breathing in the same world as me,
But too far away to ever hold.
There’s a void where he used to be,
A gap in the air that no one else can fill.
He was perfect, not in the way the world sees perfection,
But in the way that made him mine,
Even when the distance made it feel like he wasn’t.

And I yearn… God, I yearn,
For just one more moment,
One more chance to see him face to face,
To close the distance between us,
To feel whole, if only for an instant.

He’s still here,
In the space he left behind,
In the parts of me that are still his,
Even though he was never quite close enough to touch.
And I miss him more than I know how to say.`,
    collection: "Tidebound",
  },
  {
    id: 3,
    title: "Red Thread",
    year: "2026",
    form: "Free verse",
    excerpt: `There is a belief that some people are tied together by a red thread,
Not visible to the eye,
Not felt on the skin, but constant.`,
    full: `There is a belief that some people are tied together by a red thread,
Not visible to the eye,
Not felt on the skin, but constant.

It is said the thread does not measure distance,
It does not fray with time,
It does not loosen when paths turn away from each other.
It simply remains,
Quietly connecting two lives that have not yet touched.

Intimacy in this idea is not sudden,
It is inevitable,
As if recognition begins long before meeting,
As if two separate rhythms have always been practicing the same song.

The thread does not pull,
It only holds.
A gentle tension that explains the feeling of being known too quickly,
Of finding familiarity where there should be none.

To be bound this way is not possession,
It is continuity,
A promise that closeness is not created,
Only discovered.

And when two people finally stand within reach,
Nothing new is formed.
Something hidden is revealed:
The quiet truth that connection was never beginning,
Only becoming visible.`,
    collection: "First Lights",
  },
  {
    id: 4,
    title: "From a Distance",
    year: "2026",
    form: "Free verse",
    excerpt: `When the birds stop chirping,
Waves stop moving,
The sun stops shining,
The wind stops blowing,`,
    full: `When the birds stop chirping,
Waves stop moving,
The sun stops shining,
The wind stops blowing,

All the eyes full of hope
Run out of light.

When the world stops turning
And gives up on its might,
I'll be here, all by myself,
Alone,
Drained,
Quiet.

Watching all the lives I have lived,
Letting my memories fade
One by one,
Right in front of my eyes.

And I won't regret it.

I will let the end consume me,
Slowly,
Dreadfully,
In complete silence,

Knowing I have failed myself
And perhaps everyone else,
But I will not regret it.

I will fade into the unknown,
The background
Of all the lives I have touched,
But not in yours.

I will watch you from a distance,
Letting you be happy
The way you deserve.

I will not touch it.
I will not explore it.
I will not change it.

I will exist in your memories,
In your past,
Hopeless, abandoned dreams,
In the versions of me you created
Just to make me a better person.

But I will not touch it.

I won't be the background noise.
I won't be there for you.

But I will always watch you
From a distance,
With an endless gaze,

Living in our unfinished dreams,
With our children
Who never even got the chance
To exist.

And I will love them
In the way you would have,

Until they fade away
And leave me, too.`,
    collection: "First Lights",
  },
  {
    id: 5,
    title: "Untied",
    year: "2026",
    form: "Free verse",
    excerpt: `I didn't fall into you,
I recognized you.
Like a memory my soul kept
Before I had a name.`,
    full: `I didn't fall into you,
I recognized you.
Like a memory my soul kept
Before I had a name.

We don't love the way stories promise.
We teach.
You hand me silence and call it prayer.
I show you the places where fear pretends to be truth.
Between us, spirit is not an idea,
It's something breathing.

Even when we break,
Even when anger makes us strangers,
There is a pull in my chest
That does not ask permission.
A tightening thread,
Your soul tied somewhere behind my ribs.

Distance tries to be powerful.
Cities rise between us,
Oceans pretend to matter,
Time rehearses separation,
But my body knows when you exist too loudly.
My breath adjusts to you
Without asking me.

I have reached for others.
So have you.
Warm hands, kind voices,
Love that should have been enough,
But something inside me stays turned toward you
Like a compass refusing new directions.

We are not gentle with each other.
We challenge, unravel, awaken.
You break what is false in me.
I refuse to let you sleep inside illusions.
And still,
Still,
There is no version of my soul
That learns its shape without yours.

We are not one.
We are not forever in the simple sense.
We are two spirits
That can wander, rage, leave,
But never become untied.

I feel you
Even when I try not to.`,
    collection: "Tidebound",
  },
  {
    id: 6,
    title: "Take Me Home",
    year: "2026",
    form: "Free verse",
    excerpt: `Take me home
Take me where I belong,
Into the arms of a tide made of you.
Carry me away and drown me in it.`,
    full: `Take me home
Take me where I belong,
Into the arms of a tide made of you.
Carry me away and drown me in it.

The way I need you is no joke,
No passing ache,
But something ancient,
Something relentless as the sea.

Turn me upside down and push me deeper.
Drown me in your sorrows,
Deep,
Deeper still.
Let me gather them
From the dark places you hide,
Let me carry their weight
Until your shoulders forget it.
Let me be the harbor
After the storm,
The silence after the waves.
Let me be your surrender,
And in return,
Be mine.

If I must drown,
Let it be in you
In every grief,
Every longing,
Every unspoken thing
You were never meant to carry alone.`,
    collection: "Tidebound",
  },
  {
    id: 7,
    title: "The Weight of Staying",
    year: "2026",
    form: "Free verse",
    excerpt: `I find myself standing on a rope so thin
it disappears beneath my feet,
drawn between the life I have survived
and the one I cannot yet reach.`,
    full: `I find myself standing on a rope so thin
it disappears beneath my feet,
drawn between the life I have survived
and the one I cannot yet reach.
The wind knows my name.
It whispers:
just one step wrong.
Everything is blurred from here.
The people below,
their voices,
their promises,
the sky itself.
I cannot tell whether I am walking toward tomorrow
or simply delaying the fall.
They tell me falling would not kill me.
Then why does every trembling muscle beg me to hold on?
Why does my heart beat like something
trying to outrun its own ending?
If the ground is so forgiving,
why have I spent every waking hour
punishing myself for the slightest shift,
the smallest mistake,
the weight of simply being alive?
I balance
not because I am graceful,
but because I am afraid.
Afraid of looking down.
Afraid of looking ahead.
Afraid that after all this struggle,
the other side will look exactly like the one I left behind.
Still,
my feet remember movement
even when my mind forgets hope.
So I keep walking.
Because somewhere beyond this blur
there must be a place
where the rope becomes solid ground,
where I no longer have to earn
the right to exist
with perfect balance,
where living is not a performance
measured by how well I hide my shaking hands.
Until then,
I will carry my fear
like another heartbeat,
and take one impossible step after another,
hoping that survival is nothing more
than refusing to let go.`,
    collection: "First Lights",
  },
];
const essays = [
  {
    title: "A Critical Analysis of Depression and Psychological Conflict in the Poetry of Sylvia Plath",
    date: "2026",
    publication: "Academic Essay",
    length: "2,100 words",
    description:
      "Plath does not merely document her mental illness — she weaponizes it. An analysis of how Ariel transforms private suffering into a broader commentary on mid-century cultural entrapment, tracing the tension between self-erasure and violent rebirth across \"Tulips\", \"Lady Lazarus\", and \"Daddy\".",
    image: plathEssayPreview,
    full: `For decades, critical reception of Sylvia Plath's poetry has suffered from a biographical prejudice, frequently treating her verse as a collection of ordinary clinical artifacts or tragic suicide notes. This narrow reading severely underestimates the deliberate technical mastery and aesthetic control driving her work. Plath does not merely document her mental illness; she weaponizes it, transforming private suffering into a broader commentary on mid-century cultural entrapment. In her brilliant, posthumously published collection, Ariel, Plath employs vivid bodily and domestic metaphors to dramatize a profound psychological conflict. Her speakers are caught in a violent, agonizing tug-of-war between the suffocating erasure of the self (often demanded by conventional domesticity) and a desperate, necessary drive to destroy the past in order to claim total creative autonomy.

This psychological conflict between a desire for self-erasure and the agonizing demand of reality is most vividly recognized in the poem "Tulips." Written during a period of hospitalization, the poem explores depression not as an active state of grief, but as a seductive, peaceful state of total numbness. The speaker begins by declaring a preference for the sterile, white vacancy of her hospital room, stating, "I am nobody; I have given up my name and my day-clothes to the nurses" (Plath line 6). Here, the shedding of clothes and identity is equated with a profound sense of relief. By relinquishing her name, the speaker temporarily escapes the psychological weight of her history and social obligations. However, this fragile peace is aggressively disrupted by the arrival of a bouquet of red tulips. Plath frames these flowers as hostile intruders, noting that "The tulips are too excitable; it is winter here" (line 1). The stark color contrast between the white, snowy blankness of the room and the vivid, loud red of the tulips mirrors the speaker's internal psychological fracture.

The sterile white room represents a desire to slip into an ego-less, non-existent state, while the tulips act as an unwanted anchor, forcing her back into the painful vitality of life and the suffocating domestic roles of wife and mother.

When the speaker notes that she has surrendered her "history to the anesthetist" and her "body to surgeons," she is seeking a blank slate away from societal pressure. As literary critic Lillian G. Robles notes, Ariel acts as an exploration where "writing one's own identity can be a means of liberation" (Robles). In "Tulips," this liberation paradoxically manifests as a desire for complete domestic emptiness. The tulips therefore symbolize more than simple reminders of life; they embody the social expectations the speaker desperately attempts to escape. Their aggressive vitality forces the speaker to confront the identity the patriarchal culture has constructed for her. As the poem progresses, the flowers begin to consume the speaker's attention, and she confesses that the tulips "eat my oxygen" (Plath line 51). This metaphor transforms the flowers into parasitic figures, suggesting that the domestic identity attached to womanhood suffocates individuality rather than nurturing it. The conflict in "Tulips" is deeply rooted in how the speaker interacts with her immediate, physical environment. Rather than viewing the hospital room as a purely internal mental space, literary scholar Tracy Brain argues that Plath's poetry consistently engages with "the material world and the physical landscape" to ground her characters' psychological distress (Brain 14). The white walls and the "excitable" red tulips are not just mental projections; they represent a very real, physical struggle between a body demanding to fade into its surroundings and an environment refusing to let it go. The speaker's conflict is not merely between life and death, but between authentic selfhood and a socially manufactured role she experiences as emotionally annihilating. The hospital room initially offers a temporary liberation from these expectations because it strips her of responsibility, history, and identity altogether. However, the tulips violently interrupt this illusion of peace, forcing her back into a world where she must once again perform roles assigned to her.

This struggle between erasure and rebirth becomes even more violent in "Lady Lazarus," where Plath abandons the passive numbness of "Tulips" and instead presents psychological suffering as a theatrical spectacle. The speaker transforms her repeated suicide attempts into performances before a voyeuristic audience, declaring, "Dying / Is an art, like everything else. / I do it exceptionally well" (Plath lines 43–45). The detached, almost sarcastic tone of these lines demonstrates the speaker's attempt to reclaim authority over her own suffering.

By transforming her suicide attempts into a "theatrical spectacle," the speaker of "Lady Lazarus" wrests control back from her onlookers. This serves as a prime example of what Mostafaei and Shabanirad describe as the "tensional consequences of the presence and absence of the father figure" (Mostafaei and Shabanirad). By eliminating the patriarchal spectator, the speaker successfully builds a "new Order" out of her own destruction. Rather than allowing society to define her as a tragic victim, she converts pain into artistic power. Critics have often interpreted "Lady Lazarus" as an autobiographical confession, yet such readings ignore the calculated dramatic voice Plath constructs throughout the poem. The speaker is carefully theatrical, addressing the audience directly and exposing society's disturbing fascination with female pain and self-destruction.

Moreover, the imagery of resurrection in "Lady Lazarus" reflects the same psychological conflict visible in "Tulips," though in a far more explosive form. While the speaker in "Tulips" desires disappearance into sterile whiteness, the speaker in "Lady Lazarus" seeks destruction as a path toward reinvention. By the conclusion of the poem, she rises "Out of the ash" with "red hair" and vows to "eat men like air" (Plath lines 82–84). The violent phoenix imagery symbolizes an attempt to destroy oppressive structures entirely rather than quietly withdraw from them. The rebirth is not peaceful or redemptive; it is furious, unstable, and deeply destructive. Through this transformation, Plath reveals depression not as simple sadness, but as an ongoing psychological war between submission and resistance, annihilation and rebirth.

To overcome the psychological paralysis caused by depression, the speaker must engage in a mythic, violent exorcism of the internalized patriarchal figure. This struggle reaches its extreme form in "Daddy," where Plath transforms the father figure into a terrifying symbol of psychological domination and patriarchal control. Rather than portraying the father as an individual human being, the poem constructs him as an overwhelming authoritarian presence that continues to imprison the speaker long after his death. Early in the poem, the speaker confesses that she has "lived like a foot / For thirty years, poor and white, / Barely daring to breathe or Achoo" (Plath lines 3–5). The grotesque metaphor reduces the speaker to a trapped, voiceless fragment of the father's body, emphasizing the extent to which her identity has been psychologically consumed. Depression here is represented not simply as sadness, but as suffocation beneath inherited systems of fear, obedience, and silence.

As the poem develops, Plath intensifies this psychological conflict through violent historical imagery. The speaker repeatedly associates the father with fascism and tyranny, declaring, "I thought every German was you" (Plath line 28). Although these references have generated significant controversy, they function symbolically rather than literally. The speaker's violent linguistic assault on the patriarchal figure in "Daddy" transcends basic biographical grief. Jacqueline Rose argues that analyzing Plath requires looking at "textual entities" and the "circulation of fantasy" rather than treating her lines as literal history (qtd. in Gordon). The extreme historical metaphors are not a literal equation of her life to history, but a map of a mind caught in a brutal, fractured psychic process.

Plath uses exaggerated Holocaust imagery to communicate the overwhelming emotional terror the speaker experiences within patriarchal structures. The father becomes less a real parent than a mythic embodiment of male authority itself. Through these hyperbolic metaphors, the poem dramatizes how depression can distort memory and emotional experience, transforming personal suffering into monstrous psychological landscapes.

However, "Daddy" is ultimately not a poem of helplessness but of violent separation. Unlike the passive speaker of "Tulips," who longs to dissolve into emptiness, the speaker of "Daddy" seeks liberation through symbolic destruction. This culminates in the poem's final declaration: "Daddy, daddy, you bastard, I'm through" (Plath line 80). The abrupt, accusatory tone signals an attempt to sever the psychological grip the father figure maintains over the speaker's identity. Importantly, this ending does not suggest complete healing or emotional resolution. Instead, the exorcism appears desperate, unstable, and emotionally explosive. Plath therefore presents liberation not as peaceful recovery, but as an act of emotional violence necessary for survival. Across Ariel, psychological conflict repeatedly forces the speaker toward destruction as the only imaginable path to reclaiming autonomy and selfhood.

Ultimately, reducing Plath's poetry to autobiography or clinical documentation ignores the complexity of her artistic achievement. Her work does not merely record mental illness; it interrogates the cultural conditions that intensify alienation and psychological fragmentation, particularly for women constrained by mid-century gender expectations. By transforming personal suffering into mythic and symbolic language, Plath exposes depression as both an internal crisis and a social conflict. In this sense, Plath's poetry endures not because it offers sentimental tragedy, but because it fearlessly confronts the terrifying instability of identity itself.

Works Cited

Brain, Tracy. The Other Sylvia Plath. Routledge, 2001.
Gordon, Eleanor. "Romanticizing Sylvia Plath: Feminism and Literary Biography." Thirdspace: A Journal of Feminist Theory and Culture, vol. 1, no. 1, 2002.
Mostafaei, Somaye, and Ensieh Shabanirad. "Symbolic Order in Sylvia Plath's 'Daddy' and 'Lady Lazarus': A Lacanian Reading." Anafora, vol. 5, no. 2, 2018, pp. 205–227.
Robles, Lillian G. "Poststructuralism and Female Identity in Sylvia Plath's 'Ariel'." Inquiries Journal, vol. 12, no. 9, 2020.
Rose, Jacqueline. The Haunting of Sylvia Plath. Virago Press, 1991.`,
  },
  {
    title: "Breaking Free: An Insightful Feminist Examination of Confinement and Identity in \"The Yellow Wallpaper\"",
    date: "2024",
    publication: "Academic Essay",
    length: "1,800 words",
    description:
      "A feminist analysis of Charlotte Perkins Gilman's \"The Yellow Wallpaper\" — examining how the story's symbolism, narrative style, and historical context expose the physical and psychological confinement imposed on women in the 19th century.",
    image: yellowWallpaperPreview,
    full: `Charlotte Perkins Gilman's "The Yellow Wallpaper" is a groundbreaking piece of feminist literature that delves into the complexities of 19th-century gender roles and medical practices. Through the protagonist's attention-grabbing journey, Gilman skillfully explores themes of oppression, mental illness, and the relentless pursuit of female autonomy. This article provides a thorough feminist analysis of the story's symbolism, narrative style, and historical context, offering a deep understanding of its literary significance.

Charlotte Perkins Gilman (1860–1935) was an influential American writer and feminist known for her story "The Yellow Wallpaper." Born in Hartford, Connecticut, Gilman encountered a challenging upbringing marked by her father's abandonment. After her marriage to Charles Walter Stetson in 1884 and the birth of her daughter, Gilman suffered from severe postpartum depression. Her experience with the "rest cure," a restrictive treatment, inspired "The Yellow Wallpaper," which critiques oppressive medical practices.

Gilman divorced Stetson in 1894 and moved to California where she became a prominent lecturer and writer on women's rights and social reform. She later married her cousin, George Houghton Gilman, and continued to advocate for gender equality through her writings. Her legacy endures through her critical exploration of gender roles and her advocacy for women's rights. She passed away in 1935, choosing euthanasia after being diagnosed with inoperable breast cancer. Her work remains a cornerstone in feminist literature and thought.

Feminist literary theory is a critical approach that examines literature through the lens of gender dynamics, focusing on the representation of women, the roles assigned to them, and the power structures that shape their experiences. This theory seeks to understand how literature both reflects and perpetuates the patriarchal values of society and how it can be used as a tool for challenging and subverting these norms.

The story revolves around a woman experiencing postpartum depression in the late 19th century. The narrative has been crafted by her through a series of distinct journal entries. Per her husband John's recommendation, a "rest cure" has been prescribed for her. This treatment involves her confinement to a bedroom in a colonial mansion they have rented for the summer. The room is decorated with a yellow wallpaper that the narrator finds to be quite off-putting.

As she spends more time in isolation, she becomes fixated on the wallpaper, convinced that there are women trapped within its patterns. Her mental condition declines as she perceives figures in motion behind the wallpaper, seemingly attempting to free themselves. "The very excess of description of the wallpaper, and the fact that it continues after the narrator has first identified the woman behind the bars, actually foregrounds the reductiveness of her interpretive act" (Lanser, 7).

The story concludes with the narrator peeling off the wallpaper in a frantic attempt to free the women, ultimately leading to her own psychological breakdown. John collapses upon discovering her in this condition, while she continues to roam the room beside his unconscious body. The story serves as a clear allegory depicting the repercussions of female suppression, especially within the context of marriage.

"The Yellow Wallpaper" vividly portrays the physical and psychological constraints imposed on women during the 19th century. The protagonist is confined to a single room in a colonial mansion, supposedly for her health. This confinement serves as a metaphor for the broader societal constraints imposed upon women, who were often confined to domestic roles and denied opportunities for intellectual or creative pursuits.

According to Lovely, the domestic roles of women in the 19th century led to the development of depressive disorders, which were misdiagnosed as hysteria and neurasthenia. These conditions were treated in ways that compounded women's experience of oppression (4). John, the husband of the narrator, embodies patriarchal authority. His dismissive attitude towards her thoughts and feelings, along with his control over her treatment, serves as a poignant example of the limited agency granted to women.

The rest cure prescribed to the narrator reflects the prevailing medical practices of the time, which frequently dismissed women's mental health issues as mere hysteria. Gilman's critique of this treatment is apparent as the narrator's condition worsens under isolation and enforced idleness. As Bonanno states, "Isolation was supposed to help hysterical women from being overstimulated by the experiences of everyday life" (2–3). She was deprived of intellectual and emotional outlets, leading her to become increasingly fixated on the complex patterns of the yellow wallpaper in her room. This fixation caused her to project her feelings of entrapment and despair onto the wallpaper, intensifying her sense of confinement.

John's dismissive and uninformed treatment of his wife worsens her condition, portraying her as lacking consequential emotions and independence, rather than as an equal partner. His failure to take her seriously, and his belief that she is exaggerating, epitomizes the broader societal norms that historically deprived women of autonomy and agency over their own lives and bodies.

The yellow wallpaper within the narrator's room serves as a symbol of her struggle for self-expression and identity. She metaphorically projects her emotions onto the wallpaper, perceiving it as a reflection of her own mental state. This projection leads to a deterioration of her mental health, resulting in a gradual loss of sanity. The act of dismantling the wallpaper serves as a touching symbol of her eager attempt to release herself from the constraining forces of oppression. This uprising, despite contributing to her personal breakdown, underscores the importance of personal and creative freedom.

Gilman uses rich symbolism throughout the story to strengthen its feminist critique. The figure the narrator identifies as trapped within the wallpaper embodies her own sense of entrapment and her desire for liberation. The use of imagery involving creeping and crawling serves to underscore the narrator's compliance to, and subsequent resistance against, her oppressive circumstances. "I've got out at last," said I, "And I've pulled off most of the paper, so you can't put me back!" (10).

"The Yellow Wallpaper" is a critical text in feminist literature, aiming to highlight the oppressive nature of gender roles and the dismissal of women's mental health. The theme of the story maintains its relevance in contemporary society, as discussions surrounding gender equality and advancements in mental health care continue to progress. The story shows how treatments like the "rest cure" don't help women recover; instead, they make women's mental health worse. As the narrator becomes more isolated and restricted, her condition gets worse, which emphasizes the need for a more empathetic and respectful approach to women's mental health care.

In conclusion, Charlotte Perkins Gilman's "The Yellow Wallpaper" serves as a seminal work in feminist literature, providing a profound critique of the oppressive gender roles and medical practices of the 19th century. Through the protagonist's harrowing experiences, the story vividly illustrates the physical and psychological confinement imposed on women and the detrimental effects of treatments such as the "rest cure." Gilman's portrayal of the narrator's descent into madness emphasizes the crucial need for empathy and respect when addressing women's mental health issues, both historically and in contemporary society.

"The Yellow Wallpaper" remains a powerful and relatable text in feminist literature, advocating for the recognition and dismantling of oppressive structures that restrict women's voices and freedoms. Its enduring significance highlights the importance of addressing women's experiences in literature and society, and calls for a shift towards a more equitable and respectful world. Gilman's work serves as a call to action, urging continued progress towards gender equality and the validation of women's autonomy and mental health.

Works Cited

Lovley, Jamie. "Women's Mental Health in the 19th Century: An Analysis of Sociocultural Factors Contributing to Oppression of Women as Influential Female Authors of the Time." Honors College, 2019, digitalcommons.library.umaine.edu/honors/502.
Bonanno, M. "Anxious, Depressed, and Historically Oppressed: Depictions of Women's Mental Health in American Literature and Journalism, 1887–1927." 2019, ProQuest, www.proquest.com/dissertations-theses/anxious-depressed-historically-oppressed/docview/2236474892/se-2.
Lanser, Susan S. "Feminist Criticism, 'The Yellow Wallpaper,' and the Politics of Color in America." Feminist Studies, vol. 15, no. 3, Autumn 1989, pp. 415–441. JSTOR, www.jstor.org/stable/3177938.
Kingston, Maxine Hong. The Woman Warrior: Memoirs of a Girlhood among Ghosts. Vintage Books, 1989.`,
  },
  {
    title: "The Unique Style of Emily Dickinson",
    date: "2025",
    publication: "Academic Essay",
    length: "1,600 words",
    description:
      "An exploration of Emily Dickinson's defining stylistic innovations — unconventional punctuation, slant rhyme, compressed lyrical structure, and vivid imagery — and how they challenged the poetic norms of the 19th century and laid the groundwork for modern American poetry.",
    image: dickinsonPreview,
    full: `Emily Dickinson is famously known as one of the most groundbreaking figures in American poetry. Although Dickinson wrote poetry in the 19th century, her style was very different from what was common at the time. While many poets stuck to strict forms, regular meters, and predictable rhyme schemes, Dickinson liked to try new things by using unusual punctuation, slant rhyme, compressed lyrical structures, and many metaphors. Her poetry frequently explores themes of death, nature, and immortality. She presents them through a distinctive voice that challenges traditional poetic norms. Dickinson not only transformed poetic expression but also laid the groundwork for modern American poetry through these stylistic innovations.

One of Dickinson's most defining stylistic features is her unusual use of punctuation, particularly the dash. Instead of relying on standard grammatical markers such as commas and periods, Dickinson frequently inserts dashes to create pauses, disruptions, and multiple layers of meaning. According to Martha Nell Smith, the dash functions as a "visual and semantic marker of indeterminacy," allowing Dickinson to resist closure and fixed interpretation (Smith 23).

The dash also influences the rhythm and pacing of her poetry. It forces readers to slow down and consider alternative meanings by interrupting the flow of language. Thomas H. Johnson, in his authoritative edition of Dickinson's poems, notes that her punctuation reflects her "deliberate resistance to conventional syntactic order" (Johnson 35). This stylistic choice challenges the expectations of nineteenth-century readers. They were accustomed to clarity and grammatical precision. However, Dickinson's punctuation invites ambiguity and encourages active reader engagement.

Dickinson's poems are notable for their short and compressed structure. Many of her poems consist of only a few quatrains, yet they convey complex philosophical and emotional ideas. This reduced use of language reflects what Helen Vendler describes as Dickinson's "radical condensation," in which every word carries significant weight (Vendler 15).

Her poems often draw on the structure of Protestant hymns. They use common meter (alternating lines of iambic tetrameter and trimeter). But she frequently breaks this pattern and creates variations that prevent dullness. As a result, her poetry maintains a balance between familiarity and innovation. This compressed lyrical style stands in contrast to the more elaborate and verbose poetry of her contemporaries by reinforcing her distinct poetic voice.

Another hallmark of Dickinson's style is her use of slant rhyme (also known as imperfect or near rhyme). Dickinson often pairs words with similar but different sounds instead of exact rhymes, such as "soul" and "all." This technique creates a subtle tension within the poem and reflects complexity. According to Cristanne Miller, Dickinson's slant rhyme "undermines the expectation of closure traditionally associated with rhyme," thereby reinforcing the open-ended nature of her poetry (Miller 58). Her rhythmic patterns also differ from strict metrical regularity. While she frequently uses hymn meter, she allows for irregular stresses and syllable counts and produces a more natural, expressive rhythm.

This departure from traditional rhyme and metre indicates a significant innovation in poetic form. Dickinson's experimentation foreshadows the later evolution of free verse and modernist poetry, where strict formal constraints are often abandoned.

Dickinson uses a lot of metaphors and imagery in her poetry to examine abstract ideas such as immortality and death. She frequently uses unusual metaphors that turn everyday situations into interesting observations about life. For instance, death is personified as a polite admirer in her well-known poem "Because I could not stop for Death," which challenges conventional depictions of death as violent or frightening.

Harold Bloom argues that Dickinson's imagery "compresses vast metaphysical ideas into sharply defined symbols" (Bloom 72). Her use of nature imagery (such as birds, flowers, and seasons) further enhances the symbolic depth of her poetry. However, Dickinson presents it as complex and sometimes indifferent, unlike Romantic poets who often idealize nature. Her imagery is closely linked to her brevity. She relies on concentrated images that evoke multiple interpretations rather than providing extended descriptions. This technique contributes to the intensity and richness of her poetry.

Dickinson's poetry frequently revolves around the themes of death, nature, and immortality. These themes are interconnected, reflecting her ongoing exploration of existence and the unknown. Death, especially, is a central concern in her work. However, Dickinson approaches it from multiple perspectives — sometimes as a peaceful transition and sometimes as a source of uncertainty.

According to Sharon Cameron, Dickinson's treatment of death "refuses doctrinal certainty," instead presenting it as an experience that resists definitive explanation (Cameron 89). This ambiguity extends to her exploration of immortality. Instead of affirming traditional religious beliefs, Dickinson questions the nature of the afterlife and the possibility of eternal existence. Nature also plays a significant role in her poetry. It serves as both a source of inspiration and a framework for philosophical reflection. Dickinson engages with bigger existential questions through the observations of the natural world and links the physical and metaphysical realms together.

Dickinson directly challenges the norms of 19th-century poetry with her stylistic innovations. She embraced irregularity and ambiguity at a time when poets were supposed to follow formal structures and have clear meanings. Her slant rhymes questioned the expectation of perfect harmony, and her use of dashes challenged grammatical conventions. Furthermore, her poetry often resists singular interpretation. As Cynthia Griffin Wolff notes, Dickinson's work "demands active participation from the reader, who must navigate its gaps and silences" (Wolff 134). This interactive quality distinguishes her poetry from more conventional forms that tend to guide the reader toward a fixed meaning.

Dickinson expanded the possibilities of poetic expression by breaking away from established norms. Her work foresees the experimental approaches of modernist poets, who similarly pursued to redefine the boundaries of poetry. Even though Dickinson's work was not widely published during her lifetime, it has since become central to American literary tradition.

Her innovative style influenced later poets, particularly those associated with modernism. Writers such as T. S. Eliot and Ezra Pound similarly experimented with form, rhythm, and meaning. They built on the foundations that Dickinson helped establish. Dickinson's emphasis on individuality and experimentation contributed to the emergence of a distinctly American poetic voice. She helped shape the direction of American literature by rejecting European conventions and developing her own style. Today, her poetry continues to be studied and admired for its originality and depth.

In conclusion, Emily Dickinson's poetic style is defined by its innovation and complexity. Through her use of unconventional punctuation, compressed structure, slant rhyme, vivid imagery, and profound themes, she challenged the conventions of her time and transformed poetic expression. Her work not only reflects her unique perspective but also predicts the developments of modern poetry. By embracing ambiguity and experimentation, Dickinson created a body of work that remains influential and relevant. Her contributions to American poetry are overwhelming. She is one of the most important and enduring figures in literary history.

Works Cited

Bloom, Harold, ed. Emily Dickinson. Chelsea House, 2008.
Cameron, Sharon. Choosing Not Choosing: Dickinson's Fascicles. University of Chicago Press, 1992.
Dickinson, Emily. The Poems of Emily Dickinson. Edited by Thomas H. Johnson, Harvard University Press, 1955.
Johnson, Thomas H., editor. The Poems of Emily Dickinson. Harvard University Press, 1955.
Miller, Cristanne. Emily Dickinson: A Poet's Grammar. Harvard University Press, 1987.
Smith, Martha Nell. Emily Dickinson and the Art of the Dash. University of Texas Press, 1998.
Vendler, Helen. Dickinson: Selected Poems and Commentaries. Harvard University Press, 2010.
Wolff, Cynthia Griffin. Emily Dickinson. Knopf, 1986.
Farr, Judith. The Passion of Emily Dickinson. Harvard University Press, 1992.
Sewall, Richard B. The Life of Emily Dickinson. Harvard University Press, 1974.`,
  },
  {
    title: "King James I and His Obsession with Witches",
    date: "2025",
    publication: "Academic Essay",
    length: "500 words",
    description:
      "A short examination of James VI of Scotland's deeply personal fixation on witchcraft — how his belief in demonic conspiracy shaped the North Berwick witch trials, inspired Shakespeare's Macbeth, and positioned persecution as an act of political and religious authority.",
    image: kjamesPreview,
    full: `King James I of England (James VI of Scotland) was born on 15 June 1566. He took the crown after the death of his mother, Queen Mary of Scotland.

James's obsession with witchcraft was well known across both of his kingdoms, and many believe it inspired William Shakespeare's Macbeth. It is even said that Shakespeare wrote Macbeth as a relatively short play because he knew James did not have the patience to sit through long performances.

In Macbeth, the representation of the Witches closely conforms to James's descriptions in Daemonologie. James strongly believed that witchcraft was real and dangerous, and he viewed witches as servants of the Devil rather than harmless folklore figures.

James's belief that supernatural storms delayed his wife's arrival and nearly cost him his life matches the witches' ability to brew storms in Macbeth. The experience was deeply traumatic for James and led him to suspect foul play. Within his religious worldview, he interpreted the storms as acts of demonic intrusion, not natural events. He believed that someone had attempted to sabotage his marriage and threaten his life.

In response, James initiated a witch hunt known as the North Berwick Trials of 1590, one of the first and largest witch hunts in Scottish history, in which James played a significant role. The accused "witches" were often tortured into confessions, with the methods used forcing them to say what interrogators wanted to hear. In total, at least 70 people were accused of witchcraft, and most were sentenced to death. Historians estimate that around 70–80% of those accused were women.

James believed that women were more likely to become witches because they were, to him, frailer than men, making them "easier to be entrapped in those gross snares of the Devil."

He considered witchcraft a serious crime and tailored punishments to match what he believed was the severity of the offence. By combating witches, James positioned himself as a defender of both religious and political stability.

For James, witches were individuals who had consciously entered a pact with the Devil, gaining supernatural powers in exchange for their souls.`,
  },
];

function Nav({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (s: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Poetry", "Essays", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <button
          onClick={() => setActiveSection("home")}
          className="font-['Fraunces'] text-base font-light tracking-wide text-foreground hover:text-accent transition-colors duration-200"
        >
          Zeynep Duru Gürkaynak
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => setActiveSection(l.toLowerCase())}
              className={`font-['DM_Mono'] text-xs tracking-widest uppercase transition-colors duration-200 ${
                activeSection === l.toLowerCase()
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="font-['DM_Mono'] text-xs tracking-widest uppercase">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => { setActiveSection(l.toLowerCase()); setMenuOpen(false); }}
              className="font-['DM_Mono'] text-xs tracking-widest uppercase text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  return (
    <section className="min-h-screen pt-14 flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-[1fr_auto] gap-0 items-end pb-16 pt-24 md:pt-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground mb-8"
          >
            Poet & Literature Student, Social Sciences University of Ankara
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Fraunces'] text-6xl md:text-8xl lg:text-9xl font-light leading-[0.92] tracking-tight text-foreground mb-6"
          >
            Zeynep Duru
            <br />
            <span className="italic text-accent">Gürkaynak</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-['Spectral'] text-lg md:text-xl font-light text-muted-foreground max-w-md leading-relaxed mb-12"
          >
            Writing about the distances love cannot close, the threads that hold without pulling,
            and the quiet weight of watching someone from afar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <button
              onClick={() => setActiveSection("poetry")}
              className="font-['DM_Mono'] text-xs tracking-widest uppercase text-foreground border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Read the work
            </button>
            <button
              onClick={() => setActiveSection("about")}
              className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </button>
          </motion.div>
        </div>
        <div className="hidden md:block text-right">
          <p className="font-['DM_Mono'] text-xs text-muted-foreground tracking-widest writing-mode-vertical-lr rotate-180 inline-block">
            Ankara · 2022–present
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <span className="font-['DM_Mono'] text-xs text-muted-foreground tracking-widest">
            {poems.length} poems &nbsp;·&nbsp; {essays.length} essays &nbsp;·&nbsp; 3 collections
          </span>
          <span className="font-['Spectral'] italic text-sm text-muted-foreground">
            "attention is the rarest form of generosity"
          </span>
        </div>
      </div>
    </section>
  );
}

function FeaturedPoem() {
  const poem = poems[0];
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="border-t border-border py-20 md:py-28 bg-card">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16">
          <div>
            <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Featured
            </p>
            <p className="font-['DM_Mono'] text-xs text-muted-foreground">{poem.year}</p>
            <p className="font-['DM_Mono'] text-xs text-muted-foreground mt-1">{poem.form}</p>
            <p className="font-['DM_Mono'] text-xs text-accent mt-4">{poem.collection}</p>
          </div>
          <div>
            <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-light text-foreground mb-8 leading-tight">
              {poem.title}
            </h2>
            <pre className="font-['Spectral'] text-base md:text-lg font-light leading-loose text-foreground whitespace-pre-wrap">
              {expanded ? poem.full : poem.excerpt}
            </pre>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-8 font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors border-b border-current pb-0.5"
            >
              {expanded ? "Read less" : "Read in full"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PoemCard({ poem, onClick }: { poem: typeof poems[0]; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className="text-left w-full border border-border p-6 md:p-8 bg-background hover:border-foreground transition-colors duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="font-['DM_Mono'] text-xs tracking-widest uppercase text-accent">
          {poem.collection}
        </span>
        <span className="font-['DM_Mono'] text-xs text-muted-foreground">{poem.year}</span>
      </div>
      <h3 className="font-['Fraunces'] text-xl md:text-2xl font-light text-foreground mb-4 leading-tight group-hover:text-accent transition-colors duration-200">
        {poem.title}
      </h3>
      <pre className="font-['Spectral'] text-sm font-light text-muted-foreground whitespace-pre-wrap leading-relaxed line-clamp-4">
        {poem.excerpt}
      </pre>
      <p className="mt-5 font-['DM_Mono'] text-xs text-muted-foreground tracking-widest uppercase">
        {poem.form}
      </p>
    </motion.button>
  );
}

function PoemModal({ poem, onClose }: { poem: typeof poems[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/98 overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto px-6 py-20">
        <button
          onClick={onClose}
          className="mb-12 font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-current pb-0.5"
        >
          ← Back to poems
        </button>
        <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-accent mb-3">
          {poem.collection}
        </p>
        <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-light text-foreground mb-2 leading-tight italic">
          {poem.title}
        </h2>
        <p className="font-['DM_Mono'] text-xs text-muted-foreground mb-12">
          {poem.form} · {poem.year}
        </p>
        <pre className="font-['Spectral'] text-lg md:text-xl font-light leading-loose text-foreground whitespace-pre-wrap">
          {poem.full}
        </pre>
      </div>
    </motion.div>
  );
}

function PoetrySection() {
  const [selectedPoem, setSelectedPoem] = useState<typeof poems[0] | null>(null);
  const [filter, setFilter] = useState("All");
  const collections = ["All", "Tidebound", "First Lights"];
  const filtered = filter === "All" ? poems : poems.filter((p) => p.collection === filter);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-light text-foreground leading-tight">
            Poetry
          </h2>
          <div className="flex gap-2 flex-wrap">
            {collections.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-['DM_Mono'] text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((poem) => (
            <PoemCard key={poem.id} poem={poem} onClick={() => setSelectedPoem(poem)} />
          ))}
        </div>
      </div>
      {selectedPoem && (
        <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
      )}
    </section>
  );
}

function EssayModal({ essay, onClose }: { essay: typeof essays[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/98 overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto px-6 py-20">
        <button
          onClick={onClose}
          className="mb-12 font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-current pb-0.5"
        >
          ← Back to essays
        </button>
        <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-accent mb-3">
          {essay.publication}
        </p>
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-light text-foreground mb-2 leading-tight">
          {essay.title}
        </h2>
        <p className="font-['DM_Mono'] text-xs text-muted-foreground mb-8">
          {essay.date} · {essay.length}
        </p>
        <p className="font-['Spectral'] text-base md:text-lg font-light text-muted-foreground leading-relaxed mb-10 italic">
          {essay.description}
        </p>
        {"full" in essay && essay.full && (() => {
          const full = essay.full as string;
          const wcIndex = full.indexOf("Works Cited");
          const body = wcIndex !== -1 ? full.slice(0, wcIndex).trim() : full;
          const wcBlock = wcIndex !== -1 ? full.slice(wcIndex).trim() : null;
          const wcEntries = wcBlock
            ? wcBlock.split("\n").slice(1).filter((l) => l.trim().length > 0)
            : [];

          return (
            <>
              <div className="space-y-5">
                {body.split("\n\n").map((para, i) => (
                  <p key={i} className="font-['Spectral'] text-base md:text-lg font-light text-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              {wcEntries.length > 0 && (
                <div className="mt-16 pt-10 border-t border-border">
                  <h3 className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground mb-6">
                    Works Cited
                  </h3>
                  <ul className="space-y-3">
                    {wcEntries.map((entry, i) => (
                      <li
                        key={i}
                        className="font-['Spectral'] text-sm font-light text-foreground leading-relaxed pl-8 -indent-8"
                      >
                        {entry.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          );
        })()}
      </div>
    </motion.div>
  );
}

function EssaysSection() {
  const [selectedEssay, setSelectedEssay] = useState<typeof essays[0] | null>(null);

  return (
    <section className="py-20 md:py-28 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-light text-foreground mb-12">
          Essays
        </h2>
        <div className="flex flex-col divide-y divide-border">
          {essays.map((essay) => (
            <div
              key={essay.title}
              onClick={() => "full" in essay && essay.full ? setSelectedEssay(essay) : null}
              className={`py-8 grid md:grid-cols-[1fr_200px] gap-6 md:gap-12 group transition-opacity ${"full" in essay && essay.full ? "cursor-pointer hover:opacity-80" : ""}`}
            >
              <div>
                <h3 className="font-['Fraunces'] text-xl md:text-2xl font-light text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                  {essay.title}
                </h3>
                <p className="font-['Spectral'] text-base font-light text-muted-foreground leading-relaxed">
                  {essay.description}
                </p>
                {"full" in essay && essay.full && (
                  <p className="mt-3 font-['DM_Mono'] text-xs tracking-widest uppercase text-accent border-b border-accent inline-block pb-0.5">
                    View essay →
                  </p>
                )}
              </div>
              <div className="md:text-right">
                <p className="font-['DM_Mono'] text-xs text-accent tracking-widest uppercase mb-1">
                  {essay.publication}
                </p>
                <p className="font-['DM_Mono'] text-xs text-muted-foreground">{essay.date}</p>
                <p className="font-['DM_Mono'] text-xs text-muted-foreground mt-1">{essay.length}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedEssay && (
        <EssayModal essay={selectedEssay} onClose={() => setSelectedEssay(null)} />
      )}
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-20 items-start">
          <div>
            <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground mb-6">
              About
            </p>
            <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              On the work,
              <br />
              <span className="italic text-accent">and the writer.</span>
            </h2>
            <div className="space-y-5 font-['Spectral'] text-base md:text-lg font-light text-foreground leading-relaxed">
              <p>
                I am a literature student at the Social Sciences University of Ankara. I write about
                longing, the kind that doesn't ask permission, the kind that stays even when you try
                to let it go. My poems begin where language starts to fail: in the silences between
                people, in the distances that pretend to matter, in the love that never quite finds
                its way home.
              </p>
              <p>
                My two collections in progress are <em>Tidebound</em> and <em>First Lights</em>.{" "}
                <em>Tidebound</em> holds the poems written from inside longing: the pull, the
                drowning, the recognition of someone your soul already knew.{" "}
                <em>First Lights</em> holds what comes after: the watching from a distance, the quiet choice to love
                without possession, the red thread that holds even when you stop reaching for it.
              </p>
              <p>
                Alongside my poetry, I write academic essays on the literature I return to most:
                Sylvia Plath's weaponised suffering, Charlotte Perkins Gilman's locked rooms,
                Emily Dickinson's compressed silences. Writers who knew that the most radical
                thing a woman could do was refuse to disappear quietly. I am also drawn to history
                at the edges of literature, including the intersection of power, fear, and the
                stories societies tell to justify both.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-6">
              {[
                { label: "Collections", value: "2" },
                { label: "Poems written", value: "20+" },
                { label: "Years writing", value: "3" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-['Fraunces'] text-3xl font-light text-accent">{stat.value}</p>
                  <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-muted aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={portraitPhoto}
                alt="Portrait of Zeynep Duru Gürkaynak"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="mt-3 font-['DM_Mono'] text-xs text-muted-foreground text-right">
              Ankara, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-['Fraunces'] text-4xl md:text-5xl font-light leading-tight mb-6">
              Get in touch.
            </h2>
            <p className="font-['Spectral'] text-base md:text-lg font-light leading-relaxed opacity-70">
              For publication inquiries, collaborations, readings, or to say something about
              a poem — I am happy to hear from you.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { label: "Email", value: "zdgurkaynak@gmail.com" },
                { label: "Instagram", value: "@durueg" },
                { label: "Substack", value: "durueg.substack.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6">
                  <span className="font-['DM_Mono'] text-xs tracking-widest uppercase opacity-50 w-20">
                    {item.label}
                  </span>
                  <span className="font-['Spectral'] text-base font-light">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border border-white/20 px-4 py-3 font-['Spectral'] text-base font-light text-background placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border border-white/20 px-4 py-3 font-['Spectral'] text-base font-light text-background placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Your message"
              className="bg-transparent border border-white/20 px-4 py-3 font-['Spectral'] text-base font-light text-background placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none"
            />
            <button className="border border-white/60 px-6 py-3 font-['DM_Mono'] text-xs tracking-widest uppercase hover:bg-white hover:text-foreground transition-all duration-200 mt-2">
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-['DM_Mono'] text-xs text-muted-foreground tracking-widest">
          © 2024 Zeynep Duru Gürkaynak. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Poetry", "Essays", "About", "Contact"].map((l) => (
            <button
              key={l}
              onClick={() => setActiveSection(l.toLowerCase())}
              className="font-['DM_Mono'] text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav activeSection={activeSection} setActiveSection={scrollToSection} />
      <main>
        <div id="home">
          <Hero setActiveSection={scrollToSection} />
        </div>
        <FeaturedPoem />
        <div id="poetry">
          <PoetrySection />
        </div>
        <div id="essays">
          <EssaysSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer setActiveSection={scrollToSection} />
    </div>
  );
}
