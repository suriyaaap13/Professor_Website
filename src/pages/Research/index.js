import React from 'react';
import './index.css';
import DisplayResearch from '../../components/DisplayResearch';

export default function Research() {

  const items = [
    {
      id: 1,
      title: 'Design and Development of Fluorescent Photoremovable Protecting Groups for Controlled Release of Bioactive Molecules',
      content: 'Photoremovable protecting groups (PRPGs) are of great interest science they allow precise spatial and temporal control over the release of the protected functionalities. So, design and synthesis of various photoactivable protecting groups which can cage and release bioactive molecules such as bioagents (neurotransmitters and cell-signaling molecules), various functional groups (alcohols, amines, thiols) acids, bases, Ca2+ ions, oxidants, insecticides, pheromones, enzymes, fragrances, etc., at a specific site, upon exposure to UV or visible light independent of the reaction media, are of great interest of our research. Photocaging refers to temporary inactivation of a biologically active molecule using a photoremovable protecting group (PRPG).',
      img: require('../../images/Research1.png'),
    },
    {
      id: 2,
      title: 'One and Two-Photon Activated Photoremovable Protecting Groups for Real-Time-Monitoring of Dual Drug Delivery',
      content: 'Our group has designed and synthesized various photoactivable protecting groups which can cage and release bioactive molecules. Further by tuning the substituents, we made it possible to control the wavelength and rate of release. We further utilized these photoremovable protecting groups for the controlled release of drugs and real time monitoring of the drug released. In this process, since the drug molecule is covalently attached with a photoactive molecule, it loses its activity temporarily, thereby ruling out the possibility of premature release or leaching of the drug. Once the system reaches the target site, the drug can be released from the photoactive molecule through photolysis, thus restoring its activity. Some of the newly developed protecting groups by our group are perylen-3-ylmethyl, 1-acetylpyrene, 1-hydroxyacetylpyrene, acridine-9-ylmethyl, acetyl carbazole. These newly developed protecting groups are highly fluorescent and can absorb in the visible region. We have been able to utilize these protecting groups in releasing single and dual anticancer drugs. We have recently developed p-hydroxyphenacyl-benzothiazole-chlorambucil conjugate as a real time monitoring drug delivery system assisted by excited state intramolecular proton transfer. Here, we have modified a well-known phototrigger, the p-hydroxyphenacyl (pHP) group by making it fluorescent and increasing its excitation wavelength above 400 nm so that it can be efficiently utilized as drug delivery agent in the area of theranostics.Two-photon activated photoremovable protecting groups (PRPGs) have become a useful tool for the delivery of bioactive molecules. Because they provide advantages like (i) precise delivery of active molecules both spatially and temporally in a non-invasive way (ii) deeper penetration into biological samples and (iii) reduces the illumination duration, thus mitigating the harmful effects associated with the light on biological tissues. Our group has recently designed and synthesized various two-photon based protecting groups which can cage and release bioactive molecules, with substitutions like alcohols, acids, amines etc., at a specific site. We have further utilized these photoremovable protecting groups for the controlled release of drugs and real time monitoring of the drug release. Some of the newly developed two-photon activated protecting groups by our group are carbazole fused o-hydroxycinnamate and ESIPT based p-hydroxy phenacyl. These newly developed two-photon activated protecting groups are highly fluorescent and able to release dual anticancer drugs with real-time monitoring ability in the NIR region.',
      img: require('../../images/Research2.png'),
    },
    {
      id: 3,
      title: 'Photoremovable Protecting Groups as Organic Nanocarriers for Image Guided Drug Delivery',
      content: 'Our group has developed a nanoparticle-sized photoremovable protecting group for the first time, where PRPGs by itself can act as a nanocarrier for the drug delivery, thereby eliminating the key steps involved in synthesizing dual component photoresponsive nanocarriers. We have developed drug conjugated Perylene-3-ylmethanol, Acridin-9-methanol, 1-Acetylpyrene fluorescent photocages as organic nanoparticles. Perylene-3-ylmethanol organic nanoparticles showed real-time monitoring of anticancer drug release. In vitro biological studies of all these nanoparticles revealed that these newly synthesized organic nanoparticles exhibit good biocompatibility and cellular uptake as well as efficient photoregulated anticancer drug release ability. Such fluorescent organic nanoparticles which were developed by our group may open up new perspectives for designing a new class of promising photoresponsive nanocarriers for drug delivery.',
      img: require('../../images/Research3.png'),
    },
    {
      id: 4,
      title: 'Photoresponsive Inorganic Nanocarriers for Image Guided Drug Delivery',
      content: 'Generally, photoresponsive nanoparticles for drug delivery are constructed using two main ingredients: biocompatible nanoparticles and photoremovable protecting groups, which are nothing but small organic molecules which are able to release active molecule in presence of light. To date, the nominee has developed various photoresponsive nanoparticles such as coumarin tethered Fe/Si magnetic nanoparticles, quinoline decorated mesoporous silica nanoparticles, quinoline bounded carbon dots and silicon quantum dots for image guided drug delivery in vitro. With these newly developed functionalized organic and inorganic nanoparticles our group has shown efficient cell targeted drug delivery, nuclear targeted drug delivery via charge reversal and real time monitoring of the drug release via in vitro experiments.',
      img: require('../../images/Research4.png'),
    },
    {
      id: 5,
      title: 'Tumor Microenvironment Sensing and Drug Delivery',
      content: "The tumor microenvironment is the cellular environment in which the tumor exists, including surrounding blood vessels, immune cells, fibroblasts, bone marrow-derived inflammatory cells, lymphocytes, signaling molecules, and the extracellular matrix. The tumor microenvironment contributes to tumour heterogeneity. Our group is using the tumour heterogeneity as a new and competent tool for cell-specific targeted drug delivery and cancer treatment.\npH Sensing and Drug Delivery:\nCancer thrives in an acidic environment and doesn't survive in a normal, more alkaline environment. Cancer cells make our body even more acidic as they produce lactic acid. Our group has utilized this tumor microenvironment to develop pH sensing and drug delivery systems. We developed an ESIPT based drug delivery system for pH sensitive fluorescence properties and photocontrolled release of the anticancer drug chlorambucil.\nMetal Ion sensing and Drug Delivery:According to past research, healthy human prostate accumulates the highest level of zinc of any soft tissue in the body. But on the contrary, with the development of malignancy, there is a dramatic reduction in the zinc content of prostate tissue, associated with the inability of cancer cells to accumulate zinc. Our group has developed a system that first guided us to locate the diseased area by using cellular zinc concentration as a biomarker followed by the on-demand release of anticancer drug chlorambucil by employing the external stimulus, light.\nGlutathione Sensing and Drug Delivery:Biological thiols, including glutathione(GSH), cysteine (Cys), and homocysteine (Hcy), play crucial roles in maintaining the appropriate redox status of biological systems. GSH is the most abundant cellular thiol, which is important for maintaining a cellular defense against free radicals and reactive oxygen species (ROS), and it also maintains exogenous antioxidants in their reduced forms. Our group has designed a redox-responsive drug delivery system (DDS) to exploit the higher level of thiols in tumor sites to trigger the release of drug from the DDS.",
      img: require('../../images/Research5.png'),
    },
    {
      id: 6,
      title: 'Photoremovable Protecting Groups for the Release of Gasotransmitter',
      content: 'Gasotransmitters are endogenously generated gaseous signaling molecules by specific enzymes and can elicit various biological functions at physiologically allowed concentrations by targeting specific cellular and molecular targets.Gasotransmitters are highly diffusible and their half-life period varies from a few seconds to minutes. Therefore, a variety of Gasotransmitter Donors (GDs) have been developed to enable the chemical storage and delivery of these gaseous signaling molecules to benefit a wider range of biological applications. Light triggered the release of gasotransmitter in a spatially and temporally controlled fashion has gained much interest. Our group has recently designed and synthesized many photoresponsive gasotrasmitter (NO, H2S, CO) releasing molecules based on perylene, tetraphenylethylene, p-hyroxyphenacyl, flutamide, and diazeniumdiolate.',
      img: require('../../images/Research6.png'),
    },

  ]


  return (
    <div className='p-16'>
        <DisplayResearch items={items}/>
    </div>
  )
}
