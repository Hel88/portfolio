"use client";
import { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import skillsEn from "./skills-en.json";
import skillsFr from "./skills-fr.json";
import { useLanguage } from "@/context/LanguageContext";
import { Suspense } from "react";

const SkillsContent = () => {
    const { language } = useLanguage();
    const skills = language === "fr" ? skillsFr : skillsEn;
    const techSkills = skills.technicalSkills;

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const selectedSkillId = searchParams.get("skill") || techSkills[0]?.id;
    const selectedSkill = techSkills.find(skill => skill.id === selectedSkillId);

    const selectSkill = (id) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("skill", id);
        router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div>
            <div className="text-center py-3">
                <h2 className="my-3 pt-3">{skills.sectionName}</h2>
            </div>

            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-md-2 col-sm-4">
                        <h3 className="my-3 pt-3">{skills.subSectionLanguage}</h3>
                        {skills.linguisticSkills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <h3 className="my-3 pt-3">{skills.subSectionOther}</h3>
                        {skills.otherSkills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}
                    </div>

                    <div className="col-md-7 col-sm-12">
                        <h3 className="my-3 pt-3">{skills.subSectionTechnical}</h3>

                        <div className="d-flex flex-wrap gap-3 my-2">
                            {techSkills.map((skill) => (
                                <button
                                    key={skill.id}
                                    className={`btn ${selectedSkill?.id === skill.id ? "btn-dark" : "btn-outline-dark"}`}
                                    onClick={() => selectSkill(skill.id)}
                                >
                                    {skill.title}
                                </button>
                            ))}
                        </div>

                        {selectedSkill && (
                            <div className="mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <p>{selectedSkill.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <br />
        </div>
    );
};

const Skills = () => {
    return (
        <Suspense fallback={<div>Chargement...</div>}>
            <SkillsContent />
        </Suspense>
    );
};

export default Skills;
