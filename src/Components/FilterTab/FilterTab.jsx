import { Tabs } from "antd";
import styles from "./FilterTab.module.css";

export default function FilterTab(props) {
    return (
        <>
            <Tabs
                className={[styles.FilterTabs, props.className]}
                defaultActiveKey={props.ActiveKey}
                items={props.item}
                tabBarExtraContent={props.ExtraContent}
            />
        </>
    );
}
