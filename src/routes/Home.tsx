import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';

// Components
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

const Home: FunctionComponent = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <View>
            <Title label="Titre de l'article - Autisme" />
            <Paragraph>
              Voici un exemple de paragraphe limité en nombre de caractères/mots
              par ligne, allant à l&apos;essentiel et est donc plus agréable
              pour un utilisateur autiste Asperger.
            </Paragraph>
            <Paragraph>
              Cet autre paragraphe aborde le même sujet mais n&apos;as pas de
              nécessité à faire partir du premier, rendant ainsi la lecture plus
              agréable et conçise.
            </Paragraph>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
