import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ResumePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Deepanshu Nainwal </Text>
          <Text>Email: deepanshunainwal07@gmail.com ,8171789848</Text>
          {/* Add your resume content here */}
          To secure a challenging position as a Web Developer, where I can
          utilize my skills in HTML, CSS, JS, React.js, and Bootstrap to create
          innovative and dynamic web solutions that meet the needs of clients
          <Text>
            Fresher Siyaram (https://645cc253550a2407a7488be7--
            fabulous-kangaroo-cab540.netlify.app/)
          </Text>
          <Text>
            ● Designed and developed front-end SPA infrastructure for
            theE-commerce. ● Building modular and reusable components and
            libraries withOptimizing applications for performance Technical
            Skill React.js , Next.js , Redux, JavaScript, Git CSS, Html,
            3rd-party API integrations EDUCATION BCA – IGNOU Delhi Govt. Inter
            Collage Almora Uttrakhand — (10+2) Personal Skills: ● Strong
            problem-solving skills ● Ability to work well in a team environment
            ● Quick learner and adaptable to new technologies ● Strong attention
            to detail{" "}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
