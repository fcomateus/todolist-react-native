import { ButtonExcludeTask } from "@components/ButtonExcludeTask";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Container, Content } from "./styles";
import { TaskType } from "@components/List";
import { useTheme } from "styled-components/native";
import { useState } from "react";

type Props = TaskType & {
    onRemove: (taskContent : string) => void,
    onChangeConclusionStatus: (task: TaskType) => void
}

export function Task({ concluded, content, onRemove, onChangeConclusionStatus }: Props) {
    // const [isConcluded, setIsConcluded] = useState(concluded)
    const { COLORS, FONT_FAMILY } = useTheme()
    
    return (
        <Container>
            <BouncyCheckbox 
                text={content}
                textStyle={{
                    color: concluded ? COLORS.GRAY_300 : COLORS.GRAY_100
                }}
                innerIconStyle={{ 
                    borderColor: concluded ? COLORS.PURPLE :  COLORS.BLUE,
                    borderWidth: 2
                }}
                fillColor={COLORS.PURPLE}
                onPress={(isChecked) => {
                    console.log(isChecked);
                    const taskData : TaskType = {
                        concluded: isChecked,
                        content
                    }

                    console.log('taskData',taskData);
                    

                    onChangeConclusionStatus(taskData)
                    // setIsConcluded(isChecked)
                }}
            />

            {/* <Content
                concluded={concluded}
            >
                { content }
            </Content> */}

           <ButtonExcludeTask 
                removeTask={() => onRemove(content)}
           />
        </Container>
    )
}