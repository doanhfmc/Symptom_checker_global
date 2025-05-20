import img10 from "../img/Q01_icon 1.png";
import img11 from "../img/Q01_icon Ngua.png";
import img12 from "../img/Q01_icon Kich ung.png";
import img13 from "../img/Q01_icon Dau rat.png";
import img20 from "../img/Q02_Trieuchung 1.png";
import img21 from "../img/Q02_Trieuchung 2.png";
import img22 from "../img/Q02_Trieuchung 3.png";
import img23 from "../img/Q02_Trieuchung 4.png";
import img24 from "../img/Q02_Trieuchung 5.png";
import img25 from "../img/Q02_Trieuchung 6.png";
import img30 from "../img/03 _ CoB.png";
import img31 from "../img/03 _ KhongB.png";
import img210 from "../img/Gyne/Q3 - Binh thuong.png";
import img211 from "../img/Gyne/Q3 - Nong rat.png";
import img212 from "../img/Gyne/Q3 -Ngua.png";
import img213 from "../img/Gyne/Q3 - Cham Chich.png";
import img214 from "../img/Gyne/Q3 - Dau nhuc.png";
import img215 from "../img/Gyne/Q3 - Tieu buot.png";
import img216 from "../img/Gyne/Q3 Kich ung.png";
import img217 from "../img/Gyne/Q3 - Dau.png";
import img220 from "../img/Gyne/Q4 Khong co mui.png";
import img221 from "../img/Gyne/Q4 Mui tanh ca.png";
import img222 from "../img/Gyne/Q4 Mui hoi.png";
import img230 from "../img/Gyne/Q6 Ko co thay doi.png";
import img231 from "../img/Gyne/Q6 Dich nhieu hon.png";
import img232 from "../img/Gyne/Q6 Dich it hon.png";
import img240 from "../img/Gyne/Q5 - Trong loang.png";
import img241 from "../img/Gyne/Q5 Vang nhat loang.png";
import img242 from "../img/Gyne/Q5 Trang xam loang.png";
import img243 from "../img/Gyne/Q5 Dac von cuc.png";
import img244 from "../img/Gyne/Q5 Co Mu Sui bot.png";
import img245 from "../img/Gyne/Q5 Do nau von cuc.png";
import YesQ2 from "../img/Gyne/Icon Co.png";
import NoQ2 from "../img/Gyne/icon Khong.png";
import img280 from "../img/Gyne/Q8 Nuoc tieu duc.png";
import img281 from "../img/Gyne/Q8 co mau trong nuoc tieu.png";
import img282 from "../img/Gyne/Q8 co mui hoi la.png";
import img283 from "../img/Gyne/Q8 Nuoc tieu binh thuong.png";

export const questionsData = {
  skin: [
    {
      id: 1,
      text_1: "Question 1:",
      text: "Which of the following symptoms are you experiencing?",
      type: "Multiple choice",
      options: [
        {
          _id: 10,
          text: "Feel nothing strange",
          img: img10,
        },
        { _id: 11, text: "Itchy", img: img11 },
        { _id: 12, text: "Irritate", img: img12 },
        { _id: 13, text: "Sore", img: img13 },
      ],
    },
    {
      id: 2,
      text_1: "Question 2:",
      text: "Which is the most similar to describe your skin symptom?",
      type: "Single choice",
      options: [
        {
          _id: 20,
          text: (
            <p>
              Red, scaly circular/ ovoid plaques with central clearing and
              active borders <sup>1</sup>; On the trunk, neck, arms or legs
              <sup>1</sup>.
            </p>
          ),
          desc: (
            <p>
              {" "}
              1. Yee G, Al Aboud AM. Tinea Corporis. [Updated 2021 Dec 22]. In:
              StatPearls [Internet]. Treasure Island (FL): StatPearls
              Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK544360/"
                target="_blank"
              >
                {" "}
                https://www.ncbi.nlm.nih.gov/books/NBK544360/
              </a>{" "}
            </p>
          ),

          img: img20,
        },
        {
          _id: 21,
          text: (
            <p>
              Red, scaly, round plaques; On the body, typically the scalp, face,
              arms, neck, trunk or foot <sup>2-4</sup>
            </p>
          ),
          desc: (
            <p>
              2. Baumgardner DJ. Fungal Infections from Human and Animal
              Contact. J Patient Cent Res Rev. 2017 Apr 25; 4(2):78–89. doi:
              10.17294/2330-0698.1418. PMID: 31413974; PMCID: PMC6664368. <br />
              3. Deng S, Bulmer GS, Summerbell RC, et al. Changes in Frequency
              of Agents of Tinea Capitis in School Children from Western China
              Suggest Slow Migration Rates in Dermatophytes. Sabouraudia. 2008
              Aug; 46(5):421–7. <br />
              4. Tan JS. Human Zoonotic Infections Transmitted by Dogs and Cats.
              Arch Int Med. 1997 Sep 22; 157(17):1933–43.
            </p>
          ),

          img: img21,
        },
        {
          _id: 22,
          text: (
            <p>
              Red to silvery-white peeling, maceration, fissuring; On toes or
              interdigital skin. May have bad odor <sup>5,6</sup>
            </p>
          ),
          desc: (
            <p>
              5.Nigam PK, Saleh D. Tinea Pedis. 2021 Jun 7. In: StatPearls
              [Internet]. Treasure Island (FL): StatPearls Publishing; 2022 Jan.
              PMID: 29262247. <br />
              6. Ely JW, Rosenfeld S, Seabury Stone M. Diagnosis and Management
              of Tinea Infections. Am Fam Physician. 2014; 90(10):702–10.
            </p>
          ),

          img: img22,
        },
        {
          _id: 23,
          text: (
            <p>
              Red bordered, ringshaped rash, with scaling and satellite papules;
              In skin folds/sweaty areas like genital, pubic perineum or
              perianal area <sup>7-9</sup>
            </p>
          ),
          desc: (
            <p>
              7. Pippin MM, Madden ML. Tinea Cruris. [Updated 2022 Feb 17]. In:
              StatPearls [Internet]. Treasure Island (FL): StatPearls
              Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK554602/"
                target="blank"
              >
                https://www.ncbi.nlm.nih.gov/books/NBK554602/{" "}
              </a>{" "}
              . <br />
              8. Havlickova B, Czaika VA, Friedrich M. Epidemiological Trends in
              Skin Mycoses Worldwide [Published correction appears in Mycoses.
              2009 Jan; 52(1):95]. Mycoses. 2008; 51 Suppl 4. 2–15.
              doi:10.1111/j.1439-0507.2008.01606.x. <br />
              9. Deshmukh SG, Thakre T, Gupta J, et al. A Case Study on
              Management of Tinea Cruris with Classical Vaman Karma. JPRI. 2021;
              33(33B):195–202.
            </p>
          ),

          img: img23,
        },
        {
          _id: 24,
          text: (
            <p>
              Well-defined, scaly patches (pink/brown/white),
              hypo/hyperpigmented, confluent and widespread; On trunk, back,
              neck or proximal extremities <sup>10,11</sup>
            </p>
          ),
          desc: (
            <p>
              10. Karray M, McKinney WP. Tinea Versicolor. [Updated 2021 Aug
              11]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls
              Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK482500/"
                target="blank"
              >
                https://www.ncbi.nlm.nih.gov/books/NBK482500/
              </a>{" "}
              .<br />
              11. Hu SW and Bigby M. Pityriasis Versicolor. Arch Dermatol. 2010
              Oct 1; 146(10):1132–40.
            </p>
          ),

          img: img24,
        },
        {
          _id: 25,
          text: (
            <p>
              Red or brown, scaly patch, may have central discolouration; In toe
              webs, groin crease, or other skinfolds of body <sup>12-13</sup>
            </p>
          ),
          desc: (
            <p>
              12. Forouzan P, Cohen PR. Erythrasma Revisited: Diagnosis,
              Differential Diagnoses, and Comprehensive Review of Treatment.
              Cureus. 2020; 12(9):e10733. <br />
              13. Groves JB, Nassereddin A, Freeman AM. Erythrasma. [Updated
              2021 Aug 11]. In: StatPearls [Internet]. Treasure Island (FL):
              StatPearls Publishing; 2022 Jan. Available from:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK513352/"
                target="blank"
              >
                https://www.ncbi.nlm.nih.gov/books/NBK513352/
              </a>{" "}
              .
            </p>
          ),

          img: img25,
        },
      ],
    },
    {
      id: 3,
      text_1: "Question 3:",
      text: "Do you have close contact with animals/ pets  (Cat, Rabbit, Porcupine, Dog) recently? (Y/N) ",
      type: "",
      options: [
        { _id: 30, text: "Yes", img: img30 },
        { _id: 31, text: "No", img: img31 },
      ],
    },
  ],
  intimate: [
    {
      id: 1,
      text_1: "QUESTION 1",
      text: "Which of the following symptoms are you experiencing in your intimate area?",
      type: "Multiple choice",
      options: [
        { _id: 10, text: "Feel nothing strange", img: img210 },
        { _id: 11, text: "Itch", img: img212 },
        { _id: 12, text: "Soreness", img: img214 },
        { _id: 13, text: "Redness", img: img216 },
        { _id: 14, text: "Burning", img: img211 },
        { _id: 15, text: "Stinging", img: img213 },
        {
          _id: 16,
          text: "Dysuria  ",
          img: img215,
          ref: "(Pain or burning sensation when peeing)",
        },
        {
          _id: 17,
          text: "Dyspareunia ",
          img: img217,
          ref: "(Pain during or after intercourse)",
        },
      ],
    },
    {
      id: 2,
      text_1: "QUESTION 2",
      text: "Can you describe the smell of your vaginal discharge? ",
      type: "Single choice",
      options: [
        { _id: 20, text: "No odor", img: img220 },
        { _id: 21, text: "Fishy odor", img: img221 },
        { _id: 22, text: "Foul odor", img: img222 },
      ],
    },

    {
      id: 3,
      text_1: "QUESTION 3",
      text: "Have you observed a change in volume of the vaginal discharge compared to before? ",
      type: "Single choice",
      options: [
        { _id: 30, text: "No change in volume", img: img230 },
        { _id: 31, text: "More vaginal discharge", img: img231 },
        { _id: 32, text: "Less vaginal discharge", img: img232 },
      ],
    },
    {
      id: 4,
      text_1: "QUESTION 4",
      text: "How do you best describe your vaginal discharge?",
      type: "Single choice",
      options: [
        { _id: 40, text: "Clear/ white thin", img: img240 },
        { _id: 41, text: "Thin yellowish", img: img241 },
        { _id: 42, text: "Thin greyish-white", img: img242 },
        {
          _id: 43,
          text: "Thick, curdy whitish to yellowish",
          img: img243,
        },
        {
          _id: 44,
          text: "Purulent, frothy yellowish to greenish",
          img: img244,
        },
        {
          _id: 45,
          text: "Clot reddish - brown",
          img: img245,
          ref: "(not on period)",
        },
      ],
    },
    {
      id: 5,
      text_1: "QUESTION 5",
      text: " Do you have fever? ",
      type: "Single choice",
      options: [
        { _id: 50, text: "Yes", img: YesQ2 },
        { _id: 51, text: "No", img: NoQ2 },
      ],
    },
    {
      id: 6,
      text_1: "QUESTION 6",
      text: "Do you feel pain in the lower abdomen? ",
      type: "Single choice",
      options: [
        { _id: 60, text: "Yes", img: YesQ2 },
        { _id: 61, text: "No", img: NoQ2 },
      ],
    },

    {
      id: 7,
      text_1: "QUESTION 7",
      text: "Do your frequency of urination increase?  ",
      type: "Single choice",
      options: [
        { _id: 70, text: "Yes", img: YesQ2 },
        { _id: 71, text: "No", img: NoQ2 },
      ],
    },
    {
      id: 8,
      text_1: "QUESTION 8",
      text: "Do the urine change with any of the below symptoms? ",
      type: "Multiple choice",
      options: [
        { _id: 80, text: "Urine looks cloudy", img: img280 },
        { _id: 81, text: "Blood in the urine", img: img281 },
        { _id: 82, text: "Foul smelling urine", img: img282 },
        { _id: 83, text: "No changes", img: img283 },
      ],
    },
  ],
};
